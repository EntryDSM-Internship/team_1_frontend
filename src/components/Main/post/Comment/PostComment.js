import React , { useState , useEffect } from 'react'
import { hart, hart_isLike } from '../../../../img/index'
import * as style from '../../../../style/TimeLineStyle'
import axios from "axios";

function PostComment({postId,access_token,isLike}){

    const setLike = () => {
        if(!isLike){

            axios.get(`http://10.156.147.200:3000/api/post/like/${postId}`,{
                headers:{
                    'x-access-token':access_token,
                },
            }).then((res)=>{
                console.log(res);
            })
        }
    };

    return(
        <style.TimeLinePostCommentDiv>
            <style.TimeLinePostLikeLabel src={isLike ? hart_isLike : hart}>
                <style.TimeLinePostLike onClick={setLike}/>
            </style.TimeLinePostLikeLabel>
            <style.TimeLinePostCommentInputDiv>
                <style.TimeLinePostCommentInput/>
                <style.TimeLinePostCommentButton>작성</style.TimeLinePostCommentButton>
            </style.TimeLinePostCommentInputDiv>
        </style.TimeLinePostCommentDiv>
    )
}

export default PostComment