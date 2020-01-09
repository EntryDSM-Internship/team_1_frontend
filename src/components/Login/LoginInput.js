import React, { useRef } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle';


function LoginMain(){

    const idInput = useRef();
    const passwordInput = useRef();
    const errorMessage = useRef();

    const Login = function(){
        let id = idInput.current.value;
        let password = passwordInput.current.value;
        axios.post("http://10.156.147.200:3000/api/user/login",{
            email:id,
            password:password,
        })
        .then((req)=>{
            localStorage.setItem("access_token",req.data.access_token);
            localStorage.setItem("refresh_token",req.data.refresh_token);
            window.location.href = "/Main";
        })
        .catch((err)=>{
            errorMessage.current.innerHTML = "아이디 혹은 비밀번호를 확인해 주세요";
        })
    }
    
    return(
        <>
            <style.LoginInput requied placeholder="이메일" type="text" ref={idInput}/>
            <style.LoginInput requied placeholder="비밀번호" type="password" ref={passwordInput}/>
            <style.ErrorMessage ref={errorMessage}></style.ErrorMessage>
            <style.LoginButton value="로그인" type="button" onClick={Login}/>
        </>
    );
}

export default LoginMain;
