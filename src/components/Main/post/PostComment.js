import React , { useState , useEffect }from 'react'
import { hart } from '../../../img/index'
import * as style from '../../../style/TimeLineStyle'

function PostComment(){
    return(
        <style.TimeLinePostCommentDiv>
            <style.TimeLinePostLikeLabel src={hart}>
                <style.TimeLinePostLike/>
            </style.TimeLinePostLikeLabel>
            <style.TimeLinePostCommentInputDiv>
                <style.TimeLinePostCommentInput/>
                <style.TimeLinePostCommentButton>작성</style.TimeLinePostCommentButton>
            </style.TimeLinePostCommentInputDiv>
        </style.TimeLinePostCommentDiv>
    )
}

export default PostComment