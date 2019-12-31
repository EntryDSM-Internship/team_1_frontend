import React, { useState, useEffect } from 'react'
import * as style from '../style/FollowerViewStyle'
import { Header } from '../components/Main/header'
import { FollowerViewContent } from '../components/FollowerView'
import axios from 'axios'

function FollowerView({access_token,tokenChange,refreshAccessToken}){
    const [isFollow,followChange] = useState(true);
    const [content,contentChange] = useState([]);
    
    useEffect(()=>{
        refreshAccessToken()
        .then((req)=>{
            setContent(isFollow ? getFollower : getFollowing);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        setContent(isFollow ? getFollower : getFollowing);
    },[isFollow])


    const getFollower = ()=> new Promise(function(resolve,reject){
        axios.get("http://10.156.147.200:3000/api/follow/followlist",{
            headers:{
                "x-access-token" : access_token,
            }
        }).then((req)=>{
            const follower = req.data.follower;
            console.log(req)
            resolve(follower);
        }).catch((err)=>{
            reject(err);
        })
    })

    const getFollowing = ()=>{
        return new Promise(function(resolve,reject){
            axios.get("http://10.156.147.200:3000/api/follow/followlist",{
                headers:{
                    "x-access-token" : access_token,
                }
            }).then((req)=>{
                const following = req.data.following;
                console.log(following)
                resolve(following);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    const setContent = (dataFunc)=>{
        dataFunc()
        .then((data)=>{
            let content = [];
            data.map((e)=>{
                content.push(<FollowerViewContent name={e.nick} userImg={e.profile} follow={isFollow}></FollowerViewContent>);
            })
            contentChange(content);
        })
    }

    return(
        <>
            <Header access_token={access_token}/>
            <style.FollowerView>
                <style.FollowerViewMain>
                    <style.FollowerViewChoiceButtonDiv>
                        <style.FollowerViewChoiceButton onClick={()=>{followChange(true)}} click={isFollow}>팔로워</style.FollowerViewChoiceButton>
                        <style.FollowerViewChoiceButton onClick={()=>{followChange(false)}} click={!isFollow}>팔로우</style.FollowerViewChoiceButton>
                    </style.FollowerViewChoiceButtonDiv>
                    <style.FollowerViewWrapper>
                        <style.FollowerViewContents>
                            {content ? content : "리스트가 없습니다"}
                        </style.FollowerViewContents>
                    </style.FollowerViewWrapper>
                </style.FollowerViewMain>
            </style.FollowerView>
        </>
    )
}

export default FollowerView;