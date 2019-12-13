import React from 'react'
import * as style from '../../style/otherStyle';
import { Link } from 'react-router-dom'

function LoginHelp(){
    return(
        <>
            <style.LoginHelpDiv>
                <Link to="/FindPassword">
                    <style.LoginHelpButton>비밀번호를 잊으셨나요?</style.LoginHelpButton>
                </Link>
                <style.LoginHelpText>비밀번호 재설정</style.LoginHelpText>
                <Link to="/Signup">
                    <style.LoginHelpButton>처음이신가요?</style.LoginHelpButton>
                </Link>
                <style.LoginHelpText>회원 가입</style.LoginHelpText>
            </style.LoginHelpDiv>
        </>
    );
}

export default LoginHelp;
