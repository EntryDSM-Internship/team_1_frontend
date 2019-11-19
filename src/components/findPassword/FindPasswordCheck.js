import React , {useRef} from 'react'
import axios from 'axios'
import {SignUpInput , SubTitle , SignUpButton , SignUpWrapper} from '../../style/mainStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function FindPasswordCheck(props){
    const password = useRef(null);
    const passwordCheck = useRef(null);

    const FindPassword = ()=>{
        if(!CheckInputValue(password.current)){
            alert("비밀번호를 입력하세요");
        } else if(password.current.value !== passwordCheck.current.value){
            alert("다시 확인해 주세요.")
        } else{
            props.ChangePage();
        }
    }
    return(
        <SignUpWrapper>
            <SubTitle>비밀번호를 생성하세요.</SubTitle>
            <SignUpInput placeholder="비밀번호" ref={password}></SignUpInput>
            <SignUpInput placeholder="비밀번호 확인" ref={passwordCheck}></SignUpInput>
            <SignUpButton value="변경" type="button" onClick={FindPassword}/>
        </SignUpWrapper>
    );
}

export default FindPasswordCheck;