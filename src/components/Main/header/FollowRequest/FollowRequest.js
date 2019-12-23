import React, { useState, useEffect } from 'react'
import * as style from '../../../../style/TimeLineStyle'
import * as img from '../../../../img'
import { FollowRequestHeader } from './header'
// import { FollowRequestContent } from './content'

function FollowRequest(){

    const [ isClick,clickChange ] = useState(false);
    const [ deleteIndex, indexChange ] = useState(-1);
    const [ requestData, changeData ] = useState([]);

    const buttonClick = ()=>{
        if(!isClick){
            clickChange(true);
        } else{
            clickChange(false);
        }
    }


    useEffect(()=>{
        console.log(isClick)
    })

    useEffect(()=>{
        /* 수정해야 할 부분 */
        let data = [];
        if(deleteIndex >= 0){
            requestData.map((e)=>{
                if(e.props.index !== deleteIndex){
                    data.push(e);
                    return e;
                }
            })
            changeData(data);
        }
    },[deleteIndex])
    
    return(
        <>
            <style.FollowRequestLabel src={img.bell}>
                <style.FollowRequestButton onClick={buttonClick}/>
            </style.FollowRequestLabel>

            <style.FollowRequestTriangle display={isClick}/>

            <style.TimeLineHeaderFollowRequest display={isClick}>

                <FollowRequestHeader/>
                <style.FollowRequestContents>
                    {requestData}
                </style.FollowRequestContents>
            </style.TimeLineHeaderFollowRequest>
        </>
    );
}

export default FollowRequest;