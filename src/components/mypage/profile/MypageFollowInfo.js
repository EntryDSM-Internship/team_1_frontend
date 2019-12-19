import React from 'react'
import * as style from '../../../style/mypageStyle'

function MypageFollowInfo(){
    return(
        <style.MypageInfoWrapper>
        <style.MypageInfoFollow>
            <p>팔로워</p>
            <style.MypageInfoColoredText>45</style.MypageInfoColoredText>
            </style.MypageInfoFollow>
        <style.MypageInfoFollow>
            <p>팔로워</p>
            <style.MypageInfoColoredText>1</style.MypageInfoColoredText>
            </style.MypageInfoFollow>
        </style.MypageInfoWrapper>
    );
}

export default MypageFollowInfo;