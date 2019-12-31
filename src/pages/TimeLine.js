import React, { useEffect, useState, useRef } from 'react';
import { Header, Post, Write } from '../components/Main';
import * as style from '../style/TimeLineStyle';
import axios from 'axios';

function TimeLine({access_token,refreshAccessToken}){
    const [postCount,postCountChange] = useState(0);
    const [content,contentChange] = useState([]);
    const [post,postChange] = useState([]);

    useEffect(()=>{
        getContent();
    },[])

    useEffect(()=>{
        let i = 0;
        let buffer = [];
        content.map((e)=>{
            const postInfo = {
                nick:e.nick,
                content:e.content,
                postId:e.Id,
                contentImg:e.img,
                profile:e.profile,
            }
            buffer.push(<Post key={i} postInfo={postInfo} access_token={access_token}/>);
            i++;
        })
        postCountChange(content.length);
        postChange(buffer);
    },[content])

    useEffect(()=>{
        getContent();
    },[access_token])

    const getContent = () =>{
        axios.get("http://10.156.147.200:3000/api/main/post",{
            headers:{
                "x-access-token":access_token,
            }
        })
        .then((res)=>{
            console.log("asdfasdf");
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err)
            if(err.response.status === 403){
                refreshAccessToken();
            }
        })
    }

    return(
        <style.TimeLineDiv>
            <style.Background>
                    <Header refreshAccessToken={refreshAccessToken} home={true} access_token={access_token}/>
                <style.TimeLineMain>
                    <style.TimeLinePostScroll>
                    <style.TimeLinePostWrapper>
                        <Write height={postCount > 0} content={content} contentChange={contentChange} access_token={access_token}/>
                        {post}
                    </style.TimeLinePostWrapper>
                    </style.TimeLinePostScroll>
                </style.TimeLineMain>
            </style.Background>
        </style.TimeLineDiv>
    );
}

export default TimeLine;