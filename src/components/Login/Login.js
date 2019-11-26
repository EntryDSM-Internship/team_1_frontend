import React from 'react'
import MainHeader from '../header/header'
import BackgroundCircles from '../background/backgroundCircle'
import LoginHelp from './LoginHelp';
import LoginMain from './LoginInput'
import {View ,LoginBackground ,LoginBody ,LoginWrapper} from '../../style/otherStyle'


function FirstViewPage(props){
    return(
        <View>
            <BackgroundCircles/>
            <MainHeader>로그인 하기</MainHeader>
            <LoginBackground>
                <LoginBody>
                    <LoginWrapper>
                        <LoginMain></LoginMain>
                        <LoginHelp></LoginHelp>
                    </LoginWrapper>
                </LoginBody>
            </LoginBackground>
        </View>
    );
}

export default FirstViewPage;