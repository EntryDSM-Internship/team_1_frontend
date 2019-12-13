import React, { useState } from 'react'
import * as style from '../../../style/TimeLineStyle'
import * as img from '../../../img'

function PostMain(){

    const [isHover,HoverChange] = useState();

    return(
        <>
                <style.TimeLinePostUser>
                    <style.TimeLinePostUserDiv>
                        <style.TimeLinePostUserImg alt="" src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"/>
                        <style.TimeLinePostUserName>오준상</style.TimeLinePostUserName>
                    </style.TimeLinePostUserDiv>
                    <style.TimeLinePostUserDiv>  
                        <style.TimeLinePostTime>2019.12.12</style.TimeLinePostTime>
                        <style.TimeLinePostHover onMouseEnter={()=>{HoverChange(true)}} onMouseLeave={()=>{HoverChange(false)}} src={img.hover} alt="화살표 이미지">
                            <style.TimeLinePostDelete display={isHover}>삭제하기</style.TimeLinePostDelete>
                        </style.TimeLinePostHover>
                    </style.TimeLinePostUserDiv>
                </style.TimeLinePostUser>
                <style.TimeLinePostText>
                    hello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                    ello world hello world hello world hello world hello world hello world
                </style.TimeLinePostText>
                <style.TimeLinePostImgDiv>
                    <style.TimeLinePostImg src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt=""/>
                    <style.TimeLinePostImg src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt=""/>
                </style.TimeLinePostImgDiv>
        </>
    );
}

export default PostMain;   