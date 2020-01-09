import React, { useRef , useState } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'

function SignUpMain({changePage,...higherStateChange}){

    const [ name, nameChange ] = useState();
    const [ nickName, nickNameChange ] = useState();
    const [ email, emailChange ] = useState();
    const [ error , changeError ] = useState("");

    const InputCheck = ()=>{
        if(ErrorCheck()){
            SameCheck();
        }
    }

    const valueChange = (value,func)=>{
        func(value);
    }

    const ErrorCheck = ()=>{
        if(!name){
            changeError("이름을 입력 해주세요.");
            return 0;
        } else if(!nickName){
            changeError("닉네임을 입력 해주세요.");
            return 0;
        } else if(!email){
            changeError("이메일을 확인 해주세요.");
            return 0;
        }
        return 1;
    }

    const SameCheck = () =>{
        axios.post("http://10.156.147.200:3000/api/user/exist",{
            nick:nickName,
            email:email,
        }).then(()=>{
            SendEmail(email);
            higherStatesChange();
            changePage();
        }).catch((err)=>{
            console.log(err);
            try{
                StatusCheck(err.response.status);
            } catch{
                changeError("네트워크를 확인해 주세요.")
            }
        })
    }

    const StatusCheck = (status) =>{
        if(status === 409){
            changeError("이메일이 중복됩니다.");
        } else if(status === 410){
            changeError("닉네임이 중복됩니다.");
        }
    }

    const SendEmail = (email)=>{
        axios.post("http://10.156.147.200:3000/api/user/send",{
            email:email,
        }).then(()=>{
            console.log("success");
        });
    }


    const higherStatesChange = () =>{
        higherStateChange.nameChange(name);
        higherStateChange.emailChange(email);
        higherStateChange.nickNameChange(nickName);
    }

    return(
        <style.SignUpWrapper width="680px">
            <style.SubTitle>계정을 생성하세요.</style.SubTitle>
            <style.SignUpInput placeholder="성명" onChange={(e)=>{valueChange(e.target.value,nameChange)}}/>
            <style.SignUpInput placeholder="닉네임" maxLength="12" onChange={(e)=>{valueChange(e.target.value,nickNameChange)}}/>
            <style.SignUpInput placeholder="이메일" button="중복확인" onChange={(e)=>{valueChange(e.target.value,emailChange)}}></style.SignUpInput>
            <style.ErrorMessageDiv>
                <style.ErrorMessage>{error}</style.ErrorMessage>
            </style.ErrorMessageDiv>
            <style.SignUpButton value="다음" type="button" onClick={InputCheck}/>
        </style.SignUpWrapper>
    );
}

export default SignUpMain;