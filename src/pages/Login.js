import React from 'react'
import MainHeader from '../components/header/header'
import BackgroundCircles from '../components/background/backgroundCircle'
import LoginHelp from '../components/Login/LoginHelp';
import LoginMain from '../components/Login/LoginInput'
import {View ,LoginBody ,LoginWrapper, Background} from '../style/otherStyle'


function FirstViewPage(props){
    return(
        <View>
            <BackgroundCircles/>
            <MainHeader>로그인 하기</MainHeader>
            <Background>
                <LoginBody>
                    <LoginWrapper>
                        <LoginMain></LoginMain>
                        <LoginHelp></LoginHelp>
                    </LoginWrapper>
                </LoginBody>
            </Background>
        </View>
    );
}

export default FirstViewPage;