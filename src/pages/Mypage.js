import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../components/Main/header'
import * as style from '../style/mypageStyle'
import { MypageUserInfo, MypageFollowInfo, MypageModify, MypageUserImg } from '../components/mypage/profile'
import { Post } from '../components/Main/post'
import axios from 'axios'

function MyPage({access_token,tokenChange,refreshAccessToken}){

    const [postCount,postCountChange] = useState(1);
    const [content,contentChange] = useState([]);
    const [post,postChange] = useState([]);
    const [userInfo,userInfoChange] = useState({});

    useEffect(()=>{
        refreshAccessToken()
        .then(()=>{
            setUserData();
        })
    },[])

    const setUserData = ()=>{
        axios.get("http://10.156.147.200:3000/api/main",{
            headers:{
                "x-access-token":access_token,
            }
        })
        .then((res)=>{
            userInfoChange({
                nick:res.data.nick,
                email:res.data.email,
                follower:res.data.follower,
                following:res.data.following,
                profile:res.data.profile
            })
        })
    }

    useEffect(()=>{
        console.log(userInfo);
    },[userInfo])

    useEffect(()=>{
        let i = 0;
        let buffer = [];
        content.map((e)=>{
            const postInfo = {
                nick:e.nick,
                content:e.content,
                postId:e.Id,
                contentImg:e.img,
            }
            console.log(postInfo);
            buffer.push(<Post key={i} postInfo={postInfo} access_token={access_token}/>);
            i++;
        })
        postCountChange(content.length);
        postChange(buffer);
    },[content])

    return(
        <div>
            <Header access_token={access_token} friend={true}/>
            <style.Background height={postCount > 1}>
                <style.MyPageBody height={postCount > 1}>
                    <style.MypagePro>
                        <MypageUserImg src={userInfo.profile}/>
                        <style.MypageInfo>
                            <MypageUserInfo userInfo={userInfo} userInfoChange={userInfoChange}/>
                            <MypageFollowInfo userInfo={userInfo} userInfoChange={userInfoChange}/>
                            <MypageModify/>
                        </style.MypageInfo>
                    </style.MypagePro>
                    {post}
                </style.MyPageBody>
            </style.Background>
        </div>
    );
}

export default MyPage;