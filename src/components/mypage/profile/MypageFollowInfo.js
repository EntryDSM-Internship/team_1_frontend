import React from 'react'
import * as style from '../../../style/mypageStyle'

function MypageFollowInfo({userInfo,userInfoChange}){
    return(
        <style.MypageInfoWrapper>
        <style.MypageInfoFollow onClick={()=>{window.location.href="/follow"}}>
            <p>팔로워</p>
            <style.MypageInfoColoredText>{userInfo.follower}</style.MypageInfoColoredText>
            </style.MypageInfoFollow>
        <style.MypageInfoFollow onClick={()=>{window.location.href="/follow"}}>
            <p>팔로잉</p>
            <style.MypageInfoColoredText>{userInfo.following}</style.MypageInfoColoredText>
            </style.MypageInfoFollow>
        </style.MypageInfoWrapper>
    );
}

export default MypageFollowInfo;