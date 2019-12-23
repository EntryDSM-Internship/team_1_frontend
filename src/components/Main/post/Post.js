import React, { useEffect, useState } from 'react'
import PostMain from './PostMain'
import * as style from '../../../style/TimeLineStyle'
import { PostComment } from './Comment'
import { TimeLinePost } from '../../../style/TimeLineStyle'
import { CommentView } from './CommentView'

function Post(){

    let dummyData = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

    return(
        <TimeLinePost>
            <PostMain text="hello world" user="오준상" userImg=""></PostMain>
            <PostComment></PostComment>
            <style.CommentView>
                <CommentView text="닥스훈트가 최고시다" user="오준상" userImg={dummyData}></CommentView>
            </style.CommentView>
        </TimeLinePost>
    );
}

export default Post;   