import React , { useRef, useState }from 'react'
import * as style from '../../style/otherStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function FindPasswordEmail({ChangePage}){

    const Email = useRef(null);
    const [ error,errorChange ] = useState();
    
    const EmailCheck = ()=>{
        if(CheckInputValue(Email.current)){
            try{
                ChangePage();
            } catch{
                errorChange("없는 이메일 입니다");
            }
        } else{
            errorChange("이메일을 입력해 주세요");
        }
    }

    return(
        <>
            <style.SignUpWrapper width="680">
                <style.SubTitle>이메일을 다시 인증하세요.</style.SubTitle>
                <style.SignUpInput placeholder="이메일" ref={Email}/>
                <style.ErrorMessageDiv>
                    <style.ErrorMessage>{error}</style.ErrorMessage>
                </style.ErrorMessageDiv>
                <style.SignUpButton value="확인" type="button" onClick={EmailCheck}/>
            </style.SignUpWrapper>
        </>
    );
}

export default FindPasswordEmail;