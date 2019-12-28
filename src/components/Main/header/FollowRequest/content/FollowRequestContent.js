import React from 'react'
import * as style from '../../../../../style/TimeLineStyle'

function FollowRequestContent({user,img,index,indexChange}){



    return(
        <style.FollowRequestContent>

            <style.FollowRequestContentSide>
                <style.FollowRequestContentImg src={img}/>
                <style.FollowRequestContentText>{user}</style.FollowRequestContentText>
            </style.FollowRequestContentSide>

            <style.FollowRequestContentSide>
                <style.FollowRequestContentButton onClick={()=>{indexChange(index)}}>확인</style.FollowRequestContentButton>
                <style.FollowRequestContentButton onClick={()=>{indexChange(index)}}>삭제</style.FollowRequestContentButton>
            </style.FollowRequestContentSide>

        </style.FollowRequestContent>
    )
}

export default FollowRequestContent;