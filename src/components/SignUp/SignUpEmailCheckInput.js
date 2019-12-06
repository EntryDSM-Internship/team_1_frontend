import React, { useState } from 'react'
import * as style from '../../style/otherStyle'

let borderBottom;
function SignUpEmailCheckInput(props){
    const [input,inputChange] = useState(false);
    const [isFocus,FocusChange] = useState(false);
    
    const inputFocus = ()=>{
        borderBottom = "1px solid #F59990";
        FocusChange(true);
    }
    const outFocus = ()=>{
        borderBottom = "1px solid #707070;"
        FocusChange(false);
    }

    const CheckEmail = ()=>{
        try{
            // 서버통신
            props.changeCheck(true);
        } catch(e){
        }
    }

    return(
        <style.SignUpInputDiv borderBottom={borderBottom}>
            <style.EmailInput  minLength="12" maxLength="30" placeholder={props.placeholder} onFocus={inputFocus} onBlur={outFocus}/>
            <style.EmailCheckButton onClick={CheckEmail}>{props.button}</style.EmailCheckButton>
        </style.SignUpInputDiv>
    );
}

export default SignUpEmailCheckInput