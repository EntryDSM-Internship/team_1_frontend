import React from 'react'
import {LoginHelpButton , LoginHelpDiv , LoginHelpText} from '../../style/mainStyle';
import { Link } from 'react-router-dom'

function LoginHelp(){
    return(
        <>
            <LoginHelpDiv>
                <Link to="/FindPassword">
                    <LoginHelpButton>비밀번호를 잊으셨나요?</LoginHelpButton>
                </Link>
                <LoginHelpText>비밀번호 재설정</LoginHelpText>
                <Link to="/Signup">
                    <LoginHelpButton>처음이신가요?</LoginHelpButton>
                </Link>
                <LoginHelpText>회원 가입</LoginHelpText>
            </LoginHelpDiv>
        </>
    );
}

export default LoginHelp;
