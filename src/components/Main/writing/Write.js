import React, { useState, useEffect } from 'react'
import { TimeLineWriteDiv, TimeLineWriteInput, TimeLineWriteButton, TimeLineWriteButtonDiv, TimeLineWriteImgsDiv } from '../../../style/TimeLineStyle'
import WriteImgButton from './WriteImgButton';
import TimeLineWriteImg from './TimeLineWriteImg'

function TimeLineWrite(){
    const [on,ChangeOn] = useState(false);
    const [img,imgChange] = useState([]);
    const [box,boxChange] = useState([]);
    const [del,deleteChange] = useState();

    useEffect(()=>{
        let test = [];
        for(let i=0;i < img.length;i++){
            test.push(<TimeLineWriteImg key={i} name={i} imgChange={imgChange} url={img[i]} del={deleteChange}></TimeLineWriteImg>)
        }
        boxChange(test);
        console.log(test)
    },[img])

    useEffect(()=>{
        console.log(del)
        let test = [];
        if(del !== ""){
            for(let i=0;i < img.length;i++){
                if(i !== del){
                    test.push(img[i]);
                }
            }
            imgChange(test);
        }
    },[del])
    return(
        <>
            <TimeLineWriteDiv>
                <TimeLineWriteInput placeholder="오늘은 어떤 일이 있었나요?"></TimeLineWriteInput>

                <TimeLineWriteImgsDiv on={on}>
                    {box}
                </TimeLineWriteImgsDiv>
                <TimeLineWriteButtonDiv>
                    <WriteImgButton img={img} ChangeOn={ChangeOn} imgChange={imgChange}></WriteImgButton>
                    <TimeLineWriteButton>글쓰기</TimeLineWriteButton>
                </TimeLineWriteButtonDiv>
            </TimeLineWriteDiv>
        </>
    );
}

export default TimeLineWrite;