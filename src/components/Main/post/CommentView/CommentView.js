import React, { useState } from 'react'
import * as style from '../../../../style/TimeLineStyle'
import * as img from '../../../../img'

function CommentView({text,user,userImg}){

    const [isHover,HoverChange] = useState();

    return(
            <>
                <style.CommentViewUser>
                        <style.TimeLinePostUserDiv>
                            <style.CommentViewPro src={userImg}/>
                            <style.CommentViewUserName>{user}</style.CommentViewUserName>
                        </style.TimeLinePostUserDiv>
                    <style.TimeLinePostUserDiv>  
                        <style.TimeLinePostTime>2019.12.12</style.TimeLinePostTime>
                        <style.TimeLinePostHover onMouseEnter={()=>{HoverChange(true)}} onMouseLeave={()=>{HoverChange(false)}} src={img.hover} alt="화살표 이미지">
                            <style.TimeLinePostDelete display={isHover}>삭제하기</style.TimeLinePostDelete>
                        </style.TimeLinePostHover>
                    </style.TimeLinePostUserDiv>
                </style.CommentViewUser>
                <style.CommentViewTextDiv>
                    <style.CommentViewText>{text}</style.CommentViewText>
                </style.CommentViewTextDiv>
            </>
    );
}

export default CommentView