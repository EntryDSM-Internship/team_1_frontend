import React, { useRef , useState } from 'react'
import axios from 'axios'
import SignUpEmailCheckInput from './SignUpEmailCheckInput'
import * as style from '../../style/otherStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function SignUpMain({changePage}){

    const Name = useRef(null);
    const NickName = useRef(null);
    const [ check , changeCheck ] = useState(false);
    const [ error , changeError ] = useState("칸을 채워주세요");

    const InputCheck = ()=>{
        if(!CheckInputValue(Name.current)){
            changeError("이름을 입력 해주세요.");
        } else if(!CheckInputValue(NickName.current)){
            changeError("닉네임을 입력 해주세요.");
        } else if(!check){
            changeError("이메일을 확인 해주세요.");
        } else{
            try{
                //서버통신
                changePage();
                
            } catch{
                console.log("make some error");
            }
        }
    }
    return(
        <style.SignUpWrapper width="680px">
            <style.SubTitle>계정을 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="성명" ref={ Name }/>
            <style.SignUpInput placeholder="닉네임" ref={ NickName } maxLength="12"/>
            <SignUpEmailCheckInput placeholder="이메일" button="중복확인" changeCheck={changeCheck} minLength="12" maxLength="30"/>
            <style.ErrorMessage>{error}</style.ErrorMessage>
            <style.SignUpButton value="다음" type="button" onClick={InputCheck}/>
        </style.SignUpWrapper>
    );
}

export default SignUpMain;