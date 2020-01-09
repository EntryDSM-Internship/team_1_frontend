import React, { useState } from 'react';
import * as style from '../../../style/TimeLineStyle';
import * as img from '../../../img';

function PostMain({text,user,profile,contentImg,isLike,isMine}){

    let count = 0;
    let PostImg = contentImg.map((i)=>{
        return <style.TimeLinePostImg key={count++} src={`http://10.156.147.200:3000/${i}`} alt="게시물 이미지"/>
    })
    const [isHover,HoverChange] = useState();

    return(
        <>
                <style.TimeLinePostUser>
                    <style.TimeLinePostUserDiv>
                        <style.TimeLinePostUserImg alt="" src={`http://10.156.147.200:3000/${profile}`}/>
                        <style.TimeLinePostUserName>{user}</style.TimeLinePostUserName>
                    </style.TimeLinePostUserDiv>
                    <style.TimeLinePostUserDiv>  
                        <style.TimeLinePostTime>2019.12.12</style.TimeLinePostTime>
                        <style.TimeLinePostHover onMouseEnter={()=>{HoverChange(true)}} onMouseLeave={()=>{HoverChange(false)}} src={img.hover} alt="화살표 이미지">
                            <style.TimeLinePostDelete display={isHover}>삭제하기</style.TimeLinePostDelete>
                        </style.TimeLinePostHover>
                    </style.TimeLinePostUserDiv>
                </style.TimeLinePostUser>
                <style.TimeLinePostText>
                    {text}
                </style.TimeLinePostText>
                <style.TimeLinePostImgDiv>
                    {PostImg}
                </style.TimeLinePostImgDiv>
        </>
    );
}

export default PostMain;   