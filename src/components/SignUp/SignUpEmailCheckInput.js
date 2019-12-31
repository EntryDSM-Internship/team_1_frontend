import React, { useState } from 'react'
import * as style from '../../style/otherStyle'
import axios from 'axios'

let borderBottom;
function SignUpEmailCheckInput({placeholder,button,changeCheck,errorChange}){
    
    const [ code, codeChange ] = useState();

    const inputFocus = ()=>{
        borderBottom = "1px solid #F59990";
    }
    const outFocus = ()=>{
        borderBottom = "1px solid #707070;"
    }

    const CheckEmail = ()=>{
        axios.post("http://10.156.147.200:3000/api/user/email",{
            auth:code
        }).then(()=>{
            changeCheck(true);
            errorChange("확인되었습니다.");
        }).catch((e)=>{
            errorChange("코드를 다시 확인해 주세요.");
        })
    }

    return(
        <style.SignUpInputDiv borderBottom={borderBottom}>
            <style.EmailInput  minLength="12" maxLength="30" placeholder={placeholder} onFocus={inputFocus} onBlur={outFocus} onChange={(e)=>{codeChange(e.target.value)}}/>
            <style.EmailCheckButton onClick={CheckEmail}>{button}</style.EmailCheckButton>
        </style.SignUpInputDiv>
    );
}

export default SignUpEmailCheckInput