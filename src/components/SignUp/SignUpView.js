import React from 'react'
import { View , SignUpBackground , SignUpBody } from '../../style/mainStyle'
import BackgroundCircles from '../background/backgroundCircle'
import MainHeader from '../header/header'
import SignUpMain from './SignUpMain';
import SignUpEmail from './SignUpEmail';
import SignUpPassword from './SignUpPassword'
import SignUpSuccess from './SignUpSuccess'

function SignUpView(props){
    const signup = ()=>{

    }

    return(
        <View>
            <BackgroundCircles/>
            <MainHeader>회원가입하기</MainHeader>
            <SignUpBackground>
                <SignUpBody>
                    {
                        props.page === 1 && <SignUpMain changePage={props.changePage}></SignUpMain> || 
                        props.page === 2 && <SignUpEmail changePage={props.changePage}></SignUpEmail> ||
                        props.page === 3 && <SignUpPassword changePage={props.changePage}></SignUpPassword> ||
                        props.page === 4 && <SignUpSuccess></SignUpSuccess>
                    }
                </SignUpBody>
            </SignUpBackground>
            
        </View>
    );
}

export default SignUpView;