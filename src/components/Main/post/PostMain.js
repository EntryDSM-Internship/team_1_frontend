import React from 'react'
import { TimeLinePostText, TimeLinePostImgDiv, TimeLinePostImg, TimeLinePostUserImg, TimeLinePostUserName, TimeLinePostUser } from '../../../style/TimeLineStyle'

function PostMain(){
    return(
        <>
                <TimeLinePostUser>
                    <TimeLinePostUserImg alt="" src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"/>
                    <TimeLinePostUserName>오준상</TimeLinePostUserName>
                </TimeLinePostUser>
                <TimeLinePostText>
                    hello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                </TimeLinePostText>
                <TimeLinePostImgDiv>
                    <TimeLinePostImg src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt=""/>
                    <TimeLinePostImg src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt=""/>
                </TimeLinePostImgDiv>
        </>
    );
}

export default PostMain;   