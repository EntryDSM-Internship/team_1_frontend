import React , { useState , useEffect , useRef } from 'react';
import * as style from '../style/otherStyle'
import { Header } from '../components/header'
import * as component from '../components/SignUp'


function SignUp(props){
    const [page , changePage] = useState(1);

    const nextPage = ()=>{
        changePage(page+1);
    }

    return(
        <style.View>
            <Header>회원가입하기</Header>
            <style.Background>
                <style.SignUpBody>
                    {
                        page === 1 && <component.SignUpMain changePage={nextPage}/> || 
                        page === 2 && <component.SignUpEmail changePage={nextPage}/> ||
                        page === 3 && <component.SignUpPassword changePage={nextPage}/> ||
                        page === 4 && <component.SignUpPro changePage={nextPage}/> ||
                        page === 5 && <component.SignUpSuccess/>
                    }
                </style.SignUpBody>
            </style.Background>
        </style.View>
    );
}

export default SignUp;