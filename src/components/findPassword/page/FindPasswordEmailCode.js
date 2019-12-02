import React , { useRef, useState } from 'react'
import axios from 'axios'
import { SignUpWrapper, SignUpButton, SubTitle } from '../../../style/otherStyle'
import SignUpEmailCheckInput from '../../SignUp/SignUpEmailCheckInput'

function FindPasswordEmail(props){
    const [check, changeCheck] = useState(false);
    const CodeCheck = ()=>{
        if (check){
            props.ChangePage();
        } else{
            alert("인증 해주세요.");
        }
    }

    return(
        <>
            <SignUpWrapper>
                <SubTitle>이메일로 코드를 보내드렸습니다.</SubTitle>
                <SignUpEmailCheckInput placeholder="인증번호" button="확인" changeCheck={changeCheck}></SignUpEmailCheckInput>
                <SignUpButton value="확인" type="button" onClick={CodeCheck}/>
            </SignUpWrapper>
        </>
    );
}

export default FindPasswordEmail;