import React , { useState }from 'react'
import { View , SignUpBackground , SignUpBody } from '../../style/mainStyle';
import BackgroundCircles from '../background/backgroundCircle';
import MainHeader from '../header/header';
import FindPasswordEmail from './FindPasswordEmailCheck';
import FindPasswordCheck from './FindPasswordCheck';
import FindPasswordEmailInput from './FindPasswordEmail';
import FindPasswordSuccess from './FindPasswordSuccess';



function SignUpView(props){
    const [page,changePage] = useState(1);

    const ChangePage = ()=>{
        changePage(page+1);
    }

    return(
        <View>
            <BackgroundCircles/>
            <MainHeader>비밀번호 재설정</MainHeader>
            <SignUpBackground>
                <SignUpBody>
                    {
                        page === 1 && <FindPasswordEmailInput ChangePage={ChangePage}></FindPasswordEmailInput> ||
                        page === 2 && <FindPasswordEmail ChangePage={ChangePage}></FindPasswordEmail> ||
                        page === 3 && <FindPasswordCheck ChangePage={ChangePage}></FindPasswordCheck> ||
                        page === 4 && <FindPasswordSuccess></FindPasswordSuccess>
                    }
                </SignUpBody>
            </SignUpBackground>
            
        </View>
    );
}

export default SignUpView;