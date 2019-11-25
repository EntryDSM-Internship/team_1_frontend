import React from 'react'
import { TimeLineHeaderDiv } from '../../../style/TimeLineStyle'
import TimeLineHeaderButtons from './TimeLineHeaderButtons'

function TimeLineHeader(){
    return(
        <TimeLineHeaderDiv>
            <TimeLineHeaderButtons></TimeLineHeaderButtons>
        </TimeLineHeaderDiv>
    );
}

export default TimeLineHeader