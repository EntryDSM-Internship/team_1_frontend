import React, { useRef } from 'react'
import {SignUpInputDiv, SignUpInput , EmailCheckButton} from '../../style/mainStyle'
import changeCheck from '../../modules/CheckInputValue'

function SignUpEmailCheckInput(props){
    let div;
    const inputFocus = ()=>{
        console.log(div.style.borderBottom);
        div.style.borderBottom = "1px solid #F59990";
    }
    const outFocus = ()=>{
        div.style.borderBottom = "";
    }

    const Input = useRef(null);

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
        <SignUpInputDiv ref={ref => div = ref}>
            <SignUpInput ref = {Input} width="400px" height="65px" bottom="0px" margin="0px" placeholder={props.placeholder} onFocus={inputFocus} onBlur={outFocus}/>
            <EmailCheckButton onClick={CheckEmail}>{props.button}</EmailCheckButton>
        </SignUpInputDiv>
    );
}

export default SignUpEmailCheckInput