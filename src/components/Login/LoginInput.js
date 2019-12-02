import React from 'react'
import axios from 'axios'
import {LoginInput , LoginErrorMessage , LoginButton} from '../../style/otherStyle';


function LoginMain(){

    const Login = function(){
        axios.get({})
        .then((req)=>{
            console.log("로그인 성공!");
            console.log(req);
        })
        .catch((err)=>{
            console.log("로그인 실패 ㅠㅜ");
            console.log(err)
        })
    }
    
    return(
        <>
            <LoginInput requied placeholder="이메일" type="text"/>
            <LoginInput requied placeholder="비밀번호" type="password"/>
            <LoginErrorMessage>다시 입력하세요</LoginErrorMessage>
            <LoginButton value="로그인" type="button" onClick={Login}/>
        </>
    );
}

export default LoginMain;
