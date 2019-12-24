import React, { useState } from 'react'
import axios from 'axios'
import * as style from '../../style/otherStyle'
import { Link } from 'react-router-dom'


function SignUpPro({changePage}){
    let [img,imgChange] = useState("");
    const putImg = function(e){
        const file = e.target.files[0];
        imgChange(URL.createObjectURL(file));
    }

    return(
        <style.SignUpWrapper>
            <style.SubTitle margin="0">프로필을 설정하세요.</style.SubTitle>
            <label>
                <style.SignUpUserProImg src={img}/>
                <style.SignUpUserProButton type="file" onChange={putImg}/>
            </label>
            <style.SignUpButton value="다음" type="button" onClick={changePage}/>
        </style.SignUpWrapper>
    );
}

export default SignUpPro;