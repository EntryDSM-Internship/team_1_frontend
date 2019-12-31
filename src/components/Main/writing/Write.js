import React, { useState, useEffect } from 'react'
import * as style from '../../../style/TimeLineStyle'
import WriteImgButton from './WriteImgButton';
import TimeLineWriteImg from './TimeLineWriteImg'
import axios from 'axios'

function TimeLineWrite({access_token,content,contentChange}){
    const [isLoad,LoadChange] = useState(false);
    const [img,imgChange] = useState([]);
    const [imgComp,compChange] = useState([]);
    const [delIndex,indexChange] = useState();
    const [text,textChange] = useState("");
    const [formData,formDataChange] = useState(new FormData());
    const [reset,resetChange] = useState(0);

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
    },[delIndex]);
    
    useEffect(()=>{
        textChange("");
    },[reset])

    const setData = () =>{
        formData.append('content',text);
        axios.post("http://10.156.147.200:3000/api/post/write",
        formData,
        {
            headers:{
                "x-access-token" : access_token,
            }
        })
        .then((req)=>{
            updateData(req.data.post,req.data.profile);
            resetChange(reset+1);
        })
        .catch((err)=>{

        })
    }

    const updateData = (data,profile)=>{
        const newPostData = {
            nick:data.nick,
            content:data.content,
            Id:data._id,
            img:data.img,
            profile:profile,
        };
        contentChange([...content,newPostData]);
    }

    return(
        <>
            <style.TimeLineWriteDiv height={imgComp.length > 0}>
                <style.TimeLineWriteInput onChange={(e)=>{textChange(e.target.value)}} value={text} placeholder="오늘은 어떤 일이 있었나요?"></style.TimeLineWriteInput>

                <style.TimeLineWriteImgsDiv on={isLoad}>
                    {imgComp}
                </style.TimeLineWriteImgsDiv>
                <style.TimeLineWriteButtonDiv>
                    <WriteImgButton formDataChange={formDataChange} reset={reset} img={img} LoadChange={LoadChange} imgChange={imgChange}/>
                    <style.TimeLineWriteButton onClick={setData}>글쓰기</style.TimeLineWriteButton>
                </style.TimeLineWriteButtonDiv>
            </style.TimeLineWriteDiv>
        </>
    );
}

export default TimeLineWrite;