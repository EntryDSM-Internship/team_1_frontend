import React, { useState, useRef } from 'react'
import { TimeLineWriteImg, TimeLinePostImgDelete, TimeLineWriteImgDiv } from '../../../style/TimeLineStyle'

function TimeLineWriteImgs(props){
    props.del("");
    const imgDelete = (e)=>{
        props.del(props.name)
    }
    return(
            <TimeLineWriteImgDiv>
                <TimeLineWriteImg src={props.url}/>
                <TimeLinePostImgDelete onClick={imgDelete}>x</TimeLinePostImgDelete>
            </TimeLineWriteImgDiv>
    );
}

export default TimeLineWriteImgs;