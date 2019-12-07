import React from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import { Link } from 'react-router-dom'


function SignUpPro(props){
    return(
        <style.SignUpWrapper width="680">
            <style.SubTitle margin="0">프로필을 설정하세요.</style.SubTitle>
            
            <Link to="/Login">
                <style.SignUpButton value="다음" type="button"/>
            </Link>
        </style.SignUpWrapper>
    );
}

export default SignUpPro;