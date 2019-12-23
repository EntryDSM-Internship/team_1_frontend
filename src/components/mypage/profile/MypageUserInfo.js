import React, { useEffect, useRef, useState } from 'react'
import * as style from '../../../style/mypageStyle'

function MypageUserInfo(){

    const dummyData = {
        email:"pandati@naver.com",
        nickName:"sema0710"
    }

    const nickNameInput = useRef();
    const emailInput = useRef();

    const [ nickName, nickNameChange ] = useState("pandati");
    const [ email , emailChange ] = useState("pandati@naver.com");

    const valueChange = (value,stateFunc)=>{
        stateFunc(value);
    }

    useEffect(()=>{
        nickNameInput.current.value = dummyData.nickName;
        emailInput.current.value = dummyData.email;
    },[])

    return(
        <>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>닉네임</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={nickNameInput} onChange={(e)=>{valueChange(e.target.value,nickNameChange)}} type="text" placeholder="닉네임"/>
            </style.MypageInfoWrapper>
            <style.MypageInfoWrapper>
                <style.MypageInfoTextDiv>
                    <style.MypageInfoText>사용자 이메일</style.MypageInfoText>
                </style.MypageInfoTextDiv>
                <style.MypageInfoInput ref={emailInput} onChange={(e)=>{valueChange(e.target.value,emailChange)}} type="text" placeholder="이메일"/>
            </style.MypageInfoWrapper>
        </>
    );
}

export default MypageUserInfo;