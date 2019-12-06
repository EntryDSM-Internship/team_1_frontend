import React, { useState } from 'react'
import * as style from '../../../../style/TimeLineStyle'

function PostInfo(props){

    const [hover,hoverChange] = useState(false);

    return(
        <style.TimeLinePostUserDiv>
            <style.TimeLinePostTime>{props.time}</style.TimeLinePostTime>
            <style.TimeLinePostHoverDiv onMouseLeave={()=>{hoverChange(false)}} onMouseOver={()=>{hoverChange(true)}}>
                <style.TimeLinePostHover src={props.src}/>
                <style.TimeLinePostDelete display={hover}>삭제하기</style.TimeLinePostDelete>
            </style.TimeLinePostHoverDiv>
        </style.TimeLinePostUserDiv>
    )
}

export default PostInfo;