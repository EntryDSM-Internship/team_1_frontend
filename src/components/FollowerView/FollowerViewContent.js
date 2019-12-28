import React from 'react'
import * as style from '../../style/FollowerViewStyle'

function FollowViewContent(){
    return(
        <>
            <style.FollowerViewContentDiv>
                <style.FollowerViewSide display="space-between">
                    <style.FollowerViewImg src="https://t1.daumcdn.net/cfile/tistory/99954A3F5CDEA26A1B"/>  
                    <style.FollowerViewUserName>오준상</style.FollowerViewUserName>
                </style.FollowerViewSide>
                <style.FollowerViewSide display="center">
                    <style.FollowerViewButton>팔로잉</style.FollowerViewButton>
                </style.FollowerViewSide>
            </style.FollowerViewContentDiv>
        </>
    );
}

export default FollowViewContent;