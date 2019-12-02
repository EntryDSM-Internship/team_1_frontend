import React from 'react'
import { TimeLineHeaderButtonDiv, TimeLineHeaderButton, TimeLineHeaderButtonImg } from '../../../style/TimeLineStyle'
import { friend, home_hover, search } from '../../../img'

function TimeLineHeaderButtons(){
    return(
            <TimeLineHeaderButtonDiv>
                <TimeLineHeaderButton>
                    <TimeLineHeaderButtonImg src={friend} alt=""/>
                </TimeLineHeaderButton>
                <TimeLineHeaderButton click={true}>
                    <TimeLineHeaderButtonImg src={home_hover} click={true} alt=""/>
                </TimeLineHeaderButton>
                <TimeLineHeaderButton alt="" src={search}>
                <TimeLineHeaderButtonImg alt="" src={search}/>
                </TimeLineHeaderButton>
            </TimeLineHeaderButtonDiv>
    );
}

export default TimeLineHeaderButtons