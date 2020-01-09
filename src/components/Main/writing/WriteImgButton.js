import React, { useRef, useEffect } from 'react'
import * as style from '../../../style/TimeLineStyle'
import * as buttonImg from '../../../img';

function WriteImgButton({img,imgChange,LoadChange,formDataChange,reset}){

    const input = useRef();

    const getImg = (e)=>{
        const formData = new FormData();
        const files = e.target.files;
        const imgs = [];
        for(let i = 0;i < files.length;i++){
            const file = files[i];
            formData.append('img',file);
            imgs.push(URL.createObjectURL(file))
            if(i+1 === files.length){
                imgChange([...img,...imgs]);
                formDataChange(formData);   
                LoadChange(true);   
            }
        }
    }

    useEffect(()=>{
        imgChange([]);
    },[reset])

    return(
        <style.TimeLineWriteImgButtonLabel src={buttonImg.img}>
            <style.TimeLineWriteImgButton ref={input} multiple="multiple" type="file" onChange={getImg}/>
        </style.TimeLineWriteImgButtonLabel>
    );
}

export default WriteImgButton