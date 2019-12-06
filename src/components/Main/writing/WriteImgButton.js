import React, { useRef } from 'react'
import * as style from '../../../style/TimeLineStyle'
import * as buttonImg from '../../../img';

function WriteImgButton({img,imgChange,LoadChange}){

    const getImg = (e)=>{
        let files = e.target.files;
        let imgs = [];
        for(let i = 0;i < files.length;i++){
            let file = files[i];
            imgs.push(URL.createObjectURL(file))
            if(i+1 === files.length){
                imgChange([...img,...imgs]);
                LoadChange(true);   
            }
        }
    }
    return(
        <style.TimeLineWriteImgButtonLabel src={buttonImg.img}>
            <style.TimeLineWriteImgButton multiple="multiple" type="file" onChange={getImg}/>
        </style.TimeLineWriteImgButtonLabel>
    );
}

export default WriteImgButton