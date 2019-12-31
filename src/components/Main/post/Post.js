import React, { useEffect, useState } from 'react'
import PostMain from './PostMain'
import * as style from '../../../style/TimeLineStyle'
import { PostComment } from './Comment'
import { TimeLinePost } from '../../../style/TimeLineStyle'
import { CommentView } from './CommentView'

function Post({postInfo,access_token}){

    return(
        <TimeLinePost>
            <PostMain contentImg={postInfo.contentImg} text={postInfo.content} user={postInfo.nick} isLike={postInfo.isLike} isMine={postInfo.isMine} profile={postInfo.profile}></PostMain>
            <PostComment isLike={postInfo.isLike}postId={postInfo.postId} access_token={access_token}/>
            <style.CommentView>
                {/* <CommentView text="닥스훈트가 최고시다" user="오준상"></CommentView> */}
            </style.CommentView>
        </TimeLinePost>
    );
}

export default Post;   