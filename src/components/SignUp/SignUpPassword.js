import React, { useState, useRef } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'

function SignUpPassword({changePage,data,...higherStateChange}){

    const [error,errorChange] = useState("");
    const [password,passwordChange] = useState();
    const [passwordCheck,passwordCheckChange] = useState();

    const comp = function(){
        if(password < 4){
            errorChange("비밀번호가 짧습니다.");
            return 0;
        } else if(passwordChange > 12){
            errorChange("비밀번호가 깁니다.");
            return 0;
        } else if(password !== passwordCheck){
            errorChange("비밀번호를 확인해주세요.")
            return 0;
        } else{
            return 1;
        }
    }

    const signup = ()=>{
        if(comp()){
            axios.post("http://10.156.147.200:3000/api/user/register",data)
            .then(()=>{
                console.log("회원가입에 성공하셨습니다.");
                changePage();
            }).catch((err)=>{
                console.log(err)
            });
        }
    }

    return(
        <style.SignUpWrapper >
            <style.SubTitle>비밀번호를 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="비밀번호" maxLength="12" onChange={e=>{
                higherStateChange.passwordChange(e.target.value);
                passwordChange(e.target.value)
            }}></style.SignUpInput>
            <style.SignUpInput placeholder="비밀번호 확인" maxLength="12" onChange={e=>{passwordCheckChange(e.target.value)}}></style.SignUpInput>
            <style.ErrorMessageDiv>
                <style.ErrorMessage>{error}</style.ErrorMessage>
            </style.ErrorMessageDiv>
            <style.SignUpButton value="회원가입" type="button" onClick={signup}/>
        </style.SignUpWrapper>
    );
}

export default SignUpPassword;