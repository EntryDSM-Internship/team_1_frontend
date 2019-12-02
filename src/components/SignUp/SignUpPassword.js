import React from 'react'
import axios from 'axios'
import {SignUpInput , SubTitle , SignUpButton , SignUpWrapper} from '../../style/otherStyle'

function SignUpPassword(props){
    return(
        <SignUpWrapper>
            <SubTitle>비밀번호를 생성하세요.</SubTitle>
            <SignUpInput placeholder="비밀번호" maxLength="12"></SignUpInput>
            <SignUpInput placeholder="비밀번호 확인" maxLength="12"></SignUpInput>
            <SignUpButton value="회원가입" type="button" onClick={props.changePage}/>
        </SignUpWrapper>
    );
}

export default SignUpPassword;