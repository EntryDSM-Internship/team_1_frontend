import React , { useRef }from 'react'
import { SignUpWrapper, SignUpButton, SubTitle , SignUpInput } from '../../style/mainStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function FindPasswordEmail(props){
    const Email = useRef(null);
    const EmailCheck = ()=>{
        if(CheckInputValue(Email.current)){
            try{
                props.ChangePage();
            } catch{
                alert("없는 이메일 입니다");
            }
        } else{
            alert("이메일을 입력해 주세요");
        }
    }

    return(
        <>
            <SignUpWrapper>
                <SubTitle>이메일을 다시 인증하세요.</SubTitle>
                <SignUpInput placeholder="이메일" ref={Email}></SignUpInput>
                <SignUpButton value="확인" type="button" onClick={EmailCheck}/>
            </SignUpWrapper>
        </>
    );
}

export default FindPasswordEmail;