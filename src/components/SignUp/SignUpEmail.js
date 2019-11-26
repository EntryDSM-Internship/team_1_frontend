import React, { useRef, useState } from 'react'
import axios from 'axios'
import SignUpEmailCheckInput from './SignUpEmailCheckInput'
import { SignUpButton , SignUpWrapper , SubTitle} from '../../style/otherStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function SignUpMain(props){
    const [ check,changeCheck ] = useState(false);

    return(
        <SignUpWrapper>
            <SubTitle>이메일로 코드를 보내드렸습니다.</SubTitle>
            <SignUpEmailCheckInput placeholder="인증번호" button="확인" changeCheck={changeCheck}></SignUpEmailCheckInput>
            <SignUpButton value="다음" type="button" onClick={()=> {check ? props.changePage() : alert("이메일 체크 해주세요")}}/>
        </SignUpWrapper>
    );
}

export default SignUpMain;