import React from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import fireWork from '../../img/fireworks.png'
import { Link } from 'react-router-dom'


function SignUpSuccess(props){
    return(
        <style.SignUpWrapper width="680">
            <style.SubTitle margin="0">축하드립니다.</style.SubTitle>
            <style.SubTitle margin="0">회원가입이 완료되었습니다.</style.SubTitle>
            <div>
                <style.SignUpImg src={fireWork}/>
            </div>
            <Link to="/Login">
                <style.SignUpButton value="로그인" type="button"/>
            </Link>
        </style.SignUpWrapper>
    );
}

export default SignUpSuccess;