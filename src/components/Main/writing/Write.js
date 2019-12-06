import React, { useState, useEffect } from 'react'
import * as style from '../../../style/TimeLineStyle'
import WriteImgButton from './WriteImgButton';
import TimeLineWriteImg from './TimeLineWriteImg'

function TimeLineWrite(){
    const [isLoad,LoadChange] = useState(false);
    const [img,imgChange] = useState([]);
    const [imgComp,compChange] = useState([]);
    const [delIndex,indexChange] = useState();

    useEffect(()=>{
        let buffer = [];
        let i = 0;
        img.map((e)=>{
            buffer.push(<TimeLineWriteImg key={i} name={i} imgChange={imgChange} url={img[i]} indexChange={indexChange}></TimeLineWriteImg>)
            i++;
        })
        compChange(buffer);
    },[img])

    useEffect(()=>{
        let buffer = [];
        if(delIndex !== ""){
            for(let i=0;i < img.length;i++){
                if(i !== delIndex){
                    buffer.push(img[i]);
                }
            }
            imgChange(buffer);
        }
    },[delIndex])
    
    return(
        <>
            <style.TimeLineWriteDiv>
                <style.TimeLineWriteInput placeholder="오늘은 어떤 일이 있었나요?"></style.TimeLineWriteInput>

                <style.TimeLineWriteImgsDiv on={isLoad}>
                    {imgComp}
                </style.TimeLineWriteImgsDiv>
                <style.TimeLineWriteButtonDiv>
                    <WriteImgButton img={img} LoadChange={LoadChange} imgChange={imgChange}/>
                    <style.TimeLineWriteButton>글쓰기</style.TimeLineWriteButton>
                </style.TimeLineWriteButtonDiv>
            </style.TimeLineWriteDiv>
        </>
    );
}

export default TimeLineWrite;