import React, { useEffect, useState } from 'react'
import PostMain from './PostMain'
import PostComment from './PostComment'
import { TimeLinePost } from '../../../style/TimeLineStyle'

function Post(){



    return(
        <TimeLinePost>
            <PostMain></PostMain>
            <PostComment></PostComment>
        </TimeLinePost>
    );
}

export default Post;   