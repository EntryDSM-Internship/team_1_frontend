import React, { useState, useEffect } from 'react'
import * as style from '../../../../../style/TimeLineStyle'
import axios from 'axios'

function FollowRequestContent({user,userImg,index,indexChange,refreshAccessToken}){
    const [accessToken,accessTokenChange] = useState(localStorage.getItem("access_token"));

    const deleteRequest = ()=>{
        axios.get(`http://10.156.147.200:3000/api/follow/reject/${user}`,{
            headers:{
                "x-access-token" : accessToken,
            }
        })
        .then(()=>{
            indexChange(index);
        })
        .catch((err)=>{
            if(err.response.status === 404 || err.response.status === 403){
                refreshAccessToken();
            }
        })
    }

    const allowRequest = ()=>{
        axios.get(`http://10.156.147.200:3000/api/follow/allow/${user}`,{
            headers:{
                "x-access-token" : accessToken,
            }
        })
        .then((req)=>{
            indexChange(index);
        })
        .catch((err)=>{
            if(err.response.status === 404 || err.response.status === 403){
                refreshAccessToken();
            }
        })
    }

    return(
        <style.FollowRequestContent>

            <style.FollowRequestContentSide>
                <style.FollowRequestContentImg src={`http://10.156.147.200:3000/${userImg}`}/>
                <style.FollowRequestContentText>{user}</style.FollowRequestContentText>
            </style.FollowRequestContentSide>

            <style.FollowRequestContentSide>
                <style.FollowRequestContentButton onClick={allowRequest}>확인</style.FollowRequestContentButton>
                <style.FollowRequestContentButton onClick={deleteRequest}>삭제</style.FollowRequestContentButton>
            </style.FollowRequestContentSide>

        </style.FollowRequestContent>
    )
}

export default FollowRequestContent;