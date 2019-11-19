import React from 'react'
import {BackgroundCircle} from '../../style/mainStyle'

function BackgroundCircles(){
    return(
        <>
            <BackgroundCircle x="400" y="0"></BackgroundCircle>
            <BackgroundCircle x="-100" y="1000"></BackgroundCircle>
            <BackgroundCircle x="2000" y="800"></BackgroundCircle>
        </>
    );
}

export default BackgroundCircles;