import React, { useEffect, useState, useRef } from 'react'
import { Header, Post, Write } from '../components/Main'
import { TimeLineDiv, Background, TimeLineMain, TimeLineBlur } from '../style/TimeLineStyle'


function TimeLine(){
    const MainDiv = useRef();
    const [height,heightChange] = useState();

    useEffect(()=>{
        heightChange(MainDiv.current.offsetHeight);
        console.log(height)
    })


    return(
        <TimeLineDiv ref={MainDiv}>
            <TimeLineBlur height={height}></TimeLineBlur>
            <Background>
                    <Header></Header>
                <TimeLineMain>
                    <Write></Write>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </TimeLineMain>
            </Background>
        </TimeLineDiv>
    );
}

export default TimeLine;