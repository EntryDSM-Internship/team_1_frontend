import React , { useRef, useState } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import EmailCheckInput from '../public/EmailCheckInput'

function FindPasswordEmail({ChangePage}){

    const [check, changeCheck] = useState(false);
    const [ error,errorChange ] = useState();

    const CodeCheck = ()=>{
        if (check){
            ChangePage();
        } else{
            errorChange("인증 해주세요.");
        }
    }

    return(
        <>
            <style.SignUpWrapper width="680">
                <style.SubTitle>이메일로 코드를 보내드렸습니다.</style.SubTitle>
                <EmailCheckInput placeholder="인증번호" button="확인" changeCheck={changeCheck}/>
                <style.ErrorMessageDiv>
                    <style.ErrorMessage>{error}</style.ErrorMessage>
                </style.ErrorMessageDiv>
                <style.SignUpButton value="확인" type="button" onClick={CodeCheck}/>
            </style.SignUpWrapper>
        </>
    );
}

export default FindPasswordEmail;