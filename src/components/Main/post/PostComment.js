import React , { useState , useEffect }from 'react'
import { hart } from '../../../img/index'
import { TimeLinePostCommentInputDiv ,TimeLinePostCommentInput, TimeLinePostCommentButton, TimeLinePostLikeLabel, TimeLinePostLike, TimeLinePostCommentDiv } from '../../../style/TimeLineStyle'

function PostComment(){
    return(
        <TimeLinePostCommentDiv>
            <TimeLinePostLikeLabel src={hart}><TimeLinePostLike/></TimeLinePostLikeLabel>
            <TimeLinePostCommentInputDiv>
                <TimeLinePostCommentInput/>
                <TimeLinePostCommentButton>작성</TimeLinePostCommentButton>
            </TimeLinePostCommentInputDiv>
        </TimeLinePostCommentDiv>
    )
}

export default PostComment