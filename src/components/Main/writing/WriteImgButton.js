import React, { useRef } from 'react'
import { TimeLineWriteImgButton, TimeLineWriteImgButtonLabel } from '../../../style/TimeLineStyle'
import { img } from '../../../img/index';
import TimeLineWriteImgs from './TimeLineWriteImg'

function WriteImgButton(props){

    const getImg = (e)=>{
        let files = e.target.files;
        let imgs = [];
        for(let i =0;i < files.length;i++){
            let file = files[i];
            let reader = new FileReader();
            reader.addEventListener("load",function(e){
                imgs.push(e.target.result);
                if(i+1 === files.length){
                    props.ChangeOn(true)
                    props.imgChange(...props.img,imgs);
                }
            })
            reader.readAsDataURL(file);
        }
    }
    return(
        <TimeLineWriteImgButtonLabel src={img}>
            <TimeLineWriteImgButton multiple="multiple" type="file" onChange={getImg}/>
        </TimeLineWriteImgButtonLabel>
    );
}

export default WriteImgButton