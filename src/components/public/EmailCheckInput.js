import React, { useState } from 'react'
import * as style from '../../style/otherStyle'

let borderBottom;
function EmailCheckInput({changeCheck,button,placeholder}){

    const [load,reLoad] = useState(false);

    const inputFocus = ()=>{
        borderBottom = "1px solid #F59990";
        reLoad(true);
    }
    const outFocus = ()=>{
        borderBottom = "1px solid #707070;"
        reLoad(false);  
    }

    const CheckEmail = ()=>{
        try{
            // 서버통신
            changeCheck(true);
            alert("확인 되었습니다.");
        } catch(e){
            console.log(e);
            alert("존재하지 않는 이메일 입니다.");
        }
    }

    return(
        <style.SignUpInputDiv borderBottom={borderBottom}>
            <style.EmailInput  minLength="12" maxLength="30" placeholder={placeholder} onFocus={inputFocus} onBlur={outFocus}/>
            <style.EmailCheckButton onClick={CheckEmail}>{button}</style.EmailCheckButton>
        </style.SignUpInputDiv>
    );
}

export default EmailCheckInput