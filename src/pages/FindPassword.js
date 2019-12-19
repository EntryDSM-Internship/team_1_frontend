import React , { useState }from 'react'
import * as style from '../style/otherStyle';
// import { BackgroundCircle } from '../components/background';
import MainHeader from '../components/header/header';
import * as component from '../components/findPassword'

function SignUpView(props){
    const [page,changePage] = useState(1);

    const ChangePage = ()=>{
        changePage(page+1);
    }

    return(
        <style.View>
            <style.BackgroundCircle/>
            <MainHeader>비밀번호 재설정</MainHeader>
            <style.Background>
                <style.SignUpBody>
                    {
                        page === 1 && <component.FindPasswordEmail ChangePage={ChangePage}/> ||
                        page === 2 && <component.FindPasswordEmailCode ChangePage={ChangePage}/> ||
                        page === 3 && <component.FindPasswordPassword ChangePage={ChangePage}/> ||
                        page === 4 && <component.FindPasswordSuccess/>
                    }
                </style.SignUpBody>
            </style.Background>
            
        </style.View>
    );
}

export default SignUpView;