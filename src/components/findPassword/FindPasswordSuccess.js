import React from 'react'
import { SubTitle , SignUpButton , SignUpWrapper , SignUpImg} from '../../style/otherStyle'
import fireWork from '../../picture/fireworks.png'
import { Link } from 'react-router-dom'

function FindPasswordSuccess(props){
    return(
        <>
            <SignUpWrapper>
            <SubTitle margin="0">축하드립니다.</SubTitle>
            <SubTitle margin="0">비밀번호 재설정이 완료되었습니다.</SubTitle>
            <div>
                <SignUpImg src={fireWork}/>
            </div>
            <Link to="/Login">
                <SignUpButton value="로그인" type="button"/>
            </Link>
        </SignUpWrapper>
        </>
    );
}

export default FindPasswordSuccess;