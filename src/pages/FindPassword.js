import React , { useState }from 'react'
import { View , SignUpBody, Background } from '../style/otherStyle';
import BackgroundCircles from '../components/background/backgroundCircle';
import MainHeader from '../components/header/header';
import { FindPasswordEmail, FindPasswordEmailCode , FindPasswordPassword, FindPasswordSuccess} from '../components/findPassword/page'

function SignUpView(props){
    const [page,changePage] = useState(1);

    const ChangePage = ()=>{
        changePage(page+1);
    }

    return(
        <View>
            <BackgroundCircles/>
            <MainHeader>비밀번호 재설정</MainHeader>
            <Background>
                <SignUpBody>
                    {
                        page === 1 && <FindPasswordEmailCode ChangePage={ChangePage}></FindPasswordEmailCode> ||
                        page === 2 && <FindPasswordEmail ChangePage={ChangePage}></FindPasswordEmail> ||
                        page === 3 && <FindPasswordPassword ChangePage={ChangePage}></FindPasswordPassword> ||
                        page === 4 && <FindPasswordSuccess></FindPasswordSuccess>
                    }
                </SignUpBody>
            </Background>
            
        </View>
    );
}

export default SignUpView;