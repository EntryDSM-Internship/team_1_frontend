import React, { useState, useRef } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'

function SignUpPassword({changePage}){

    const [error,errorChange] = useState("");
    let password = useRef();
    let passwordCheck = useRef();
    const comp = function(){
        let passwordValue = password.current.value;
        let passwordCheckValue = passwordCheck.current.value;
        if(passwordValue.length < 4){
            errorChange("비밀번호가 짧습니다.");
        } else if(passwordValue.length > 12){
            errorChange("비밀번호가 깁니다.");
        } else if(passwordValue !== passwordCheckValue){
            errorChange("비밀번호를 확인해주세요.")
        } else{
            changePage()
        }
    }

    return(
        <style.SignUpWrapper >
            <style.SubTitle>비밀번호를 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="비밀번호" maxLength="12" ref={password} ></style.SignUpInput>
            <style.SignUpInput placeholder="비밀번호 확인" maxLength="12" ref={passwordCheck}></style.SignUpInput>
            <style.ErrorMessageDiv>
                <style.ErrorMessage>{error}</style.ErrorMessage>
            </style.ErrorMessageDiv>
            <style.SignUpButton value="회원가입" type="button" onClick={comp}/>
        </style.SignUpWrapper>
    );
}

export default SignUpPassword;