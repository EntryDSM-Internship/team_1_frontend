import React from 'react'
import * as style from '../../style/otherStyle'
import fireWork from '../../img/fireworks.png'
import { Link } from 'react-router-dom'

function FindPasswordSuccess(props){
    return(
        <>
            <style.SignUpWrapper width="680">
            <style.SubTitle margin="0">축하드립니다.</style.SubTitle>
            <style.SubTitle margin="0">비밀번호 재설정이 완료되었습니다.</style.SubTitle>
            <div>
                <style.SignUpImg alt="축하 이미지" src={fireWork}/>
            </div>
            <Link to="/Login">
                <style.SignUpButton value="로그인" type="button"/>
            </Link>
        </style.SignUpWrapper>
        </>
    );
}

export default FindPasswordSuccess;