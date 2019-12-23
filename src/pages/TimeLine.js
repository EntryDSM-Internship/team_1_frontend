import React, { useEffect, useState, useRef } from 'react'
import { Header, Post, Write } from '../components/Main'
import * as style from '../style/TimeLineStyle'
import * as getAll from 'getallelements'

function TimeLine(){
    const MainDiv = useRef();
    const [height,heightChange] = useState();
    const [blur,blurChange] = useState(false);

    useEffect(()=>{
        heightChange(MainDiv.current.offsetHeight);
        console.log(getAll.getAllElementByClass());
        console.log(getAll.getAllElementById());
        console.log(getAll.getAllElementByTagName());
    })


    return(
        <style.TimeLineDiv ref={MainDiv}>
            <style.TimeLineBlur onClick={()=>{blurChange(false)}} height={height} click={blur}/>
            <style.Background>
                    <Header home={true} blurChange={blurChange} blur={blur}/>
                <style.TimeLineMain>
                    <Write/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </style.TimeLineMain>
            </style.Background>
        </style.TimeLineDiv>
    );
}

export default TimeLine;