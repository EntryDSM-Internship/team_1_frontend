import React, { useState } from 'react'
import * as style from '../../../style/TimeLineStyle'
import * as img from '../../../img'

function PostMain({text,user,userImg,postImg}){

    let imgExample = ["https://dbscthumb-phinf.pstatic.net/3006_000_1/20140409152330110_VVU1Z2V6A.jpg/DK010.jpg?type=m4500_4500_fst_n","https://t1.daumcdn.net/cfile/tistory/99954A3F5CDEA26A1B","https://t1.daumcdn.net/cfile/tistory/99954A3F5CDEA26A1B"];
    
    let PostImg = imgExample.map((i)=>{
        return <style.TimeLinePostImg src={i} alt="게시물 이미지"/>
    })
    
    const [isHover,HoverChange] = useState();

    return(
        <>
                <style.TimeLinePostUser>
                    <style.TimeLinePostUserDiv>
                        <style.TimeLinePostUserImg alt="" src={userImg}/>
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