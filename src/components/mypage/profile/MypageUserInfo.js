import React, { useEffect, useRef } from 'react'
import * as style from '../../../style/mypageStyle'

function MypageUserInfo(){

    let nickname = useRef();
    let email = useRef();

    useEffect(()=>{
        nickname.current.value = "pandati"
        email.current.value = "pandati@naver.com"
    })

    return(
        <>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>닉네임</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={nickname} type="text" placeholder="닉네임"/>
            </style.MypageInfoWrapper>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>사용자 이메일</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={email} type="text" placeholder="이메일"/>
            </style.MypageInfoWrapper>
        </>
    );
}

export default MypageUserInfo;