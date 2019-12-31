import React, { useState, useEffect } from 'react'
import * as style from '../../style/FollowerViewStyle'


function FollowViewContent({name,follow,userImg}){

    // const followingCancel = ()=>{
    //     axios({
    //         method:"DELETE",
    //         header:{
    //             "x-access-token":accessToken,
    //         }
    //         url:""
    //     })
    // }

    return(
        <>
            <style.FollowerViewContentDiv>
                <style.FollowerViewSide display="space-between">
                    <style.FollowerViewImg alt="유저 이미지" src={`http://10.156.147.200:3000${userImg ? userImg : "/profile/0.jpg"}`}/>  
                    <style.FollowerViewUserName>{name}</style.FollowerViewUserName>
                </style.FollowerViewSide>
                <style.FollowerViewSide display="center">
                <style.FollowerViewButton>{follow ? "팔로잉" : "팔로워"}</style.FollowerViewButton>
                </style.FollowerViewSide>
            </style.FollowerViewContentDiv>
        </>
    );
}

export default FollowViewContent;