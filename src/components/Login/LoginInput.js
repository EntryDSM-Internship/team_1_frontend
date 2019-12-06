import React from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle';


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
            <style.LoginInput requied placeholder="이메일" type="text"/>
            <style.LoginInput requied placeholder="비밀번호" type="password"/>
            <style.ErrorMessage>다시 입력하세요</style.ErrorMessage>
            <style.LoginButton value="로그인" type="button" onClick={Login}/>
        </>
    );
}

export default LoginMain;
