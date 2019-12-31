import React, { useRef, useState } from 'react'
import axios from 'axios'
import SignUpEmailCheckInput from './SignUpEmailCheckInput'
import * as style from '../../style/otherStyle'

function SignUpMain({changePage}){

    
    const [ check,changeCheck ] = useState(false);
    const [ error, errorChange ] = useState("");
    const isCheck = () =>{
        return check ? changePage() : errorChange("이메일 체크 해주세요");
    }
    return(
        <style.SignUpWrapper width="680">
            <style.SubTitle>이메일로 코드를 보내드렸습니다.</style.SubTitle>
            <SignUpEmailCheckInput placeholder="인증번호" button="확인" errorChange={errorChange} changeCheck={changeCheck}/>
            <style.ErrorMessageDiv>
                <style.ErrorMessage>{error}</style.ErrorMessage>
            </style.ErrorMessageDiv>
            <style.SignUpButton value="다음" type="button" onClick={isCheck}/>
        </style.SignUpWrapper>
    );
}

export default SignUpMain;