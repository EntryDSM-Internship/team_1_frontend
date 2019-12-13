import React, { useState, useRef } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'

function SignUpPassword({changePage}){

    const [error,errorChange] = useState("칸을 채워주세요");
    let password = useRef();
    let passwordCheck = useRef();
    const comp = function(){
        let passwordValue = password.current.value;
        let passwordCheckValue = passwordCheck.current.value;
        if(passwordValue !== passwordCheckValue){
            errorChange("비밀번호를 확인해주세요")
        } else{
            changePage()
        }
    }

    return(
        <style.SignUpWrapper >
            <style.SubTitle>비밀번호를 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="비밀번호" maxLength="12" ref={password} ></style.SignUpInput>
            <style.SignUpInput placeholder="비밀번호 확인" maxLength="12" ref={passwordCheck}></style.SignUpInput>
            <style.ErrorMessage>{error}</style.ErrorMessage>
            <style.SignUpButton value="회원가입" type="button" onClick={comp}/>
        </style.SignUpWrapper>
    );
}

export default SignUpPassword;