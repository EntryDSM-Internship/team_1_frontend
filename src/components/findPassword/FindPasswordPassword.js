import React , { useRef, useState } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function FindPasswordCheck({ChangePage}){
    const password = useRef(null);
    const passwordCheck = useRef(null);
    const [ error,errorChange ] = useState();

    const FindPassword = ()=>{
        let passwordLength = password.current.value.length;

        if(!CheckInputValue(password.current)){
            errorChange("비밀번호를 입력하세요.");
        } else if(password.current.value !== passwordCheck.current.value){
            errorChange("다시 확인해 주세요.");
        } else if(passwordLength < 4){
            errorChange("비밀번호가 너무 짧습니다.");
        } else if(passwordLength > 12){
            errorChange("비밀번호가 너무 깁니다.");
        } else{
            ChangePage();
        }
    }

    return(
        <style.SignUpWrapper>
            <style.SubTitle>비밀번호를 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="비밀번호" ref={password}/>
            <style.SignUpInput placeholder="비밀번호 확인" ref={passwordCheck}/>
            <style.ErrorMessageDiv>
                <style.ErrorMessage>{error}</style.ErrorMessage>
            </style.ErrorMessageDiv>
            <style.SignUpButton value="변경" type="button" onClick={FindPassword}/>
        </style.SignUpWrapper>
    );
}

export default FindPasswordCheck;