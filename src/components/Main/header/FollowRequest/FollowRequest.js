import React, { useState, useEffect } from 'react'
import * as style from '../../../../style/TimeLineStyle'
import * as img from '../../../../img'
import { FollowRequestHeader } from './header'
import axios from 'axios'
import { FollowRequestContent } from './content'

function FollowRequest({access_token,refreshAccessToken}){

    const [isClick,clickChange] = useState(false);
    const [deleteIndex,indexChange] = useState(-1);
    const [content,contentChange] = useState([]);

    const getFollowRequest = ()=>{
        axios.get("http://10.156.147.200:3000/api/follow/allowlist",{
            headers:{
                "x-access-token" : access_token,
            }
        })
        .then((req)=>{
            setContent(req.data.allow);
        })
        .catch((err)=>{
            if(err.response.status === 403){
                refreshAccessToken();
            }
        });
    }

    useEffect(()=>{
        getFollowRequest();
    },[access_token])


    const setContent = (data)=>{
        let buffer = [];
        let index = 0;
        data.map((e)=>{
            buffer.push(<FollowRequestContent refreshAccessToken={refreshAccessToken} key={index} indexChange={indexChange} index={index} user={e.nick} userImg={e.profile}></FollowRequestContent>);
            index++;
        })
        contentChange(buffer);
    }

    const buttonClick = ()=>{
        if(!isClick){
            clickChange(true);
        } else{
            clickChange(false);
        }
    }


    useEffect(()=>{
        getFollowRequest();
    },[])

    useEffect(()=>{
        let data = [];
        if(deleteIndex >= 0){
            content.map((e)=>{
                if(e.props.index !== deleteIndex){
                    data.push(e);
                    return e;
                }
            })
            contentChange(data);
        }
    },[deleteIndex])
    
    return(
        <>
            <style.FollowRequestLabel src={img.bell}>
                <style.FollowRequestButton onClick={buttonClick}/>
            </style.FollowRequestLabel>

                <style.FollowRequestTriangle display={isClick}/>

                <style.TimeLineHeaderFollowRequest display={isClick}>
                    <FollowRequestHeader/>
                    <style.FollowRequestContents>
                        {content}
                    </style.FollowRequestContents>
                </style.TimeLineHeaderFollowRequest>
        </>
    );
}

export default FollowRequest;