import React, { useState } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import { Link } from 'react-router-dom'


function SignUpPro({changePage,nickName}){
    const [img,imgChange] = useState("http://www.bestianwoosong.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png");
    const [formData,formDataChange] = useState();
    
    const putImg = (e) => {
        const file = e.target.files[0];
        const form = new FormData();
        if(file){
            form.append("img",file);
            formDataChange(form);
            imgChange(URL.createObjectURL(file));
        } else{
            imgChange(undefined);
        }
    }
    
    const setImg = ()=>{
        console.log(formData);
        axios.post(`http://10.156.147.200:3000/api/user/profile/${nickName}`,formData)
        .then(()=>{
            changePage();
        })
    }

    return(
        <style.SignUpWrapper>
            <style.SubTitle margin="0">프로필을 설정하세요.</style.SubTitle>
            <label>
                <style.SignUpUserProImg src={img}/>
                <style.SignUpUserProButton type="file" onChange={putImg}/>
            </label>
            <style.SignUpButton value="다음" type="button" onClick={setImg}/>
        </style.SignUpWrapper>
    );
}

export default SignUpPro;