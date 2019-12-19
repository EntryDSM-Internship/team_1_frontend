import React from 'react'
import MainHeader from '../components/header/header'
import BackgroundCircle from '../components/background/backgroundCircle'
import LoginHelp from '../components/Login/LoginHelp';
import LoginMain from '../components/Login/LoginInput'
import * as style from '../style/otherStyle'


function FirstViewPage(props){
    return(
        <style.View>
            <BackgroundCircle/>
            <MainHeader>로그인 하기</MainHeader>
            <style.Background>
                <style.LoginBody>
                    <style.LoginWrapper>
                        <LoginMain/>
                        <LoginHelp/>
                    </style.LoginWrapper>
                </style.LoginBody>
            </style.Background>
        </style.View>
    );
}

export default FirstViewPage;