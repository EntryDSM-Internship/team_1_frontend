import React from 'react'
import { TimeLineHeaderButtonDiv, TimeLineHeaderButton } from '../../../style/TimeLineStyle'
import { friend, home_hover, search } from '../../../img'

function TimeLineHeaderButtons(){
    return(
            <TimeLineHeaderButtonDiv>
                <TimeLineHeaderButton alt="" src={friend}></TimeLineHeaderButton>
                <TimeLineHeaderButton alt="" src={home_hover}></TimeLineHeaderButton>
                <TimeLineHeaderButton alt="" src={search}></TimeLineHeaderButton>
            </TimeLineHeaderButtonDiv>
    );
}

export default TimeLineHeaderButtons