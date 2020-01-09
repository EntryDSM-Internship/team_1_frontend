import React, { useEffect, useState } from 'react';
import * as style from '../../../style/TimeLineStyle';
import TimeLineHeaderButtons from './TimeLineHeaderButtons';
import { FollowRequest } from './FollowRequest';
import axios from 'axios';

function TimeLineHeader({home,search,friend,access_token,refreshAccessToken}){

    const [userImg,userImgChange] = useState('0');

    const getUserInfo = () =>{
        axios.get("http://10.156.147.200:3000/api/main",{
            headers:{
                "x-access-token":access_token,
            }
        }).then((req)=>{
            userImgChange(req.data.profile);
        })
        .catch((err)=>{
            if(err.response.status === 404 || err.response.status === 403){
                refreshAccessToken();
            }
        })
    }

    useEffect(()=>{
        getUserInfo();
    },[])

    useEffect(()=>{
        getUserInfo();
    },[access_token])


    return(
        <style.TimeLineHeaderDiv>
            <style.TimeLineSide>
                <style.TimeLineProImg src={`http://10.156.147.200:3000/${userImg}`} onClick={()=>{
                    localStorage.setItem("access_token",null);    
                    localStorage.setItem("refresh_token",null);
                    window.location.href="/";
                    }
                }
                alt=""/>
            </style.TimeLineSide>
            <TimeLineHeaderButtons home={home} search={search} friend={friend}></TimeLineHeaderButtons>
            <style.TimeLineSide>
                <FollowRequest refreshAccessToken={refreshAccessToken} access_token={access_token}/>
            </style.TimeLineSide>
        </style.TimeLineHeaderDiv>
    );
}

export default TimeLineHeader