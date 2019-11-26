import React, { useRef , useState } from 'react'
import axios from 'axios'
import SignUpEmailCheckInput from './SignUpEmailCheckInput'
import {SignUpInput , SubTitle , SignUpButton , SignUpWrapper} from '../../style/otherStyle'
import CheckInputValue from '../../modules/CheckInputValue'

function SignUpMain(props){
    const Name = useRef(null);
    const NickName = useRef(null);
    const [ check , changeCheck ] = useState(false);
    const InputCheck = ()=>{
        if(!CheckInputValue(Name.current)){
            alert("이름을 입력 해주세여.");
        } else if(!CheckInputValue(NickName.current)){
            alert("닉네임을 입력 해주세요.");
        } else if(!check){
            alert("이메일을 확인 해주세요.");
        } else{
            try{
                //서버통신
                props.changePage();
                
            } catch{
                alert("에러가 발생하였습니다.");
            }
        }
    }
    return(
        <SignUpWrapper>
            <SubTitle>계정을 생성하세요.</SubTitle>
            <SignUpInput placeholder="성명" ref={ Name }/>
            <SignUpInput placeholder="닉네임" ref={ NickName }/>
            <SignUpEmailCheckInput placeholder="이메일" button="중복확인" changeCheck={changeCheck}></SignUpEmailCheckInput>
            <SignUpButton value="다음" type="button" onClick={InputCheck}/>
        </SignUpWrapper>
    );
}

export default SignUpMain;