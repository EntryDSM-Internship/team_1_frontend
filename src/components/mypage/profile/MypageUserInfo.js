import React, { useEffect, useRef, useState } from 'react'
import * as style from '../../../style/mypageStyle'

function MypageUserInfo({userInfoChange,userInfo}){
    
    const nickNameInput = useRef();
    const emailInput = useRef();



    useEffect(()=>{
        nickNameInput.current.value = userInfo.nick;
        emailInput.current.value = userInfo.email;
    },[userInfo])

    const nickNameChange = (e) => {
        let buffer = Object.assign({},userInfo);
        buffer.nick = e.target.value;
        userInfoChange(buffer);
    }

    const emailChange = (e) =>{
        let buffer = Object.assign({},userInfo);
        buffer.email = e.target.value;
        userInfoChange(buffer);
    }

    return(
        <>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>닉네임</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={nickNameInput} onChange={nickNameChange} type="text" placeholder="닉네임"/>
            </style.MypageInfoWrapper>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>사용자 이메일</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={emailInput} onChange={emailChange} type="text" placeholder="이메일"/>
            </style.MypageInfoWrapper>
        </>
    );
}

export default MypageUserInfo;