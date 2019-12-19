import React, { useEffect, useState } from 'react'
import PostMain from './PostMain'
import * as style from '../../../style/TimeLineStyle'
import { PostComment } from './Comment'
import { TimeLinePost } from '../../../style/TimeLineStyle'
import { CommentView } from './CommentView'

function Post(){



    return(
        <TimeLinePost>
            <PostMain text="hello world" user="오준상" userImg=""></PostMain>
            <PostComment></PostComment>
            <style.CommentView>
                <CommentView text="닥스훈트가 최고시다" user="오준상" userImg=""></CommentView>
            </style.CommentView>
        </TimeLinePost>
    );
}

export default Post;   