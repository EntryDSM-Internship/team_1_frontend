import React, { useState, useEffect } from 'react'
import * as style from '../../../style/TimeLineStyle'

function TimeLineWriteImgs({name,url,indexChange}){
    indexChange("")
    const imgDelete = (e)=>{
        indexChange(name)
    }
    return(
            <style.TimeLineWriteImgDiv>
                <style.TimeLineWriteImg src={url}/>
                <style.TimeLinePostImgDelete onClick={imgDelete}>x</style.TimeLinePostImgDelete>
            </style.TimeLineWriteImgDiv>
    );
}

export default TimeLineWriteImgs;