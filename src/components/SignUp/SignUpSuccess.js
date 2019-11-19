import React from 'react'
import axios from 'axios'
import { SubTitle , SignUpButton , SignUpWrapper , SignUpImg} from '../../style/mainStyle'
import fireWork from '../../picture/fireworks.png'
import { Link } from 'react-router-dom'


function SignUpSuccess(props){
    return(
        <SignUpWrapper>
            <SubTitle margin="0">축하드립니다.</SubTitle>
            <SubTitle margin="0">회원가입이 완료되었습니다.</SubTitle>
            <div>
                <SignUpImg src={fireWork}/>
            </div>
            <Link to="/Login">
                <SignUpButton value="로그인" type="button"/>
            </Link>
        </SignUpWrapper>
    );
}

export default SignUpSuccess;