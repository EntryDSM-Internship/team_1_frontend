import React, { useState } from 'react'
import {SignUpInputDiv,EmailInput , EmailCheckButton} from '../../style/otherStyle'

let borderBottom;
function SignUpEmailCheckInput(props){
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
            props.changeCheck(true);
            alert("확인 되었습니다.");
        } catch(e){
            console.log(e);
            alert("존재하지 않는 이메일 입니다.");
        }
    }

    return(
        <SignUpInputDiv borderBottom={borderBottom}>
            <EmailInput placeholder={props.placeholder} onFocus={inputFocus} onBlur={outFocus}/>
            <EmailCheckButton onClick={CheckEmail}>{props.button}</EmailCheckButton>
        </SignUpInputDiv>
    );
}

export default SignUpEmailCheckInput