import React from 'react'
import * as style from '../style/otherStyle';
import { Link } from 'react-router-dom'

function FirstView(){
    return(
        <style.View display="flex">
            <style.FirstViewBackground>
                <div>
                    <style.FirstViewTitle>전세계에 있는 친구들과</style.FirstViewTitle>
                    <style.FirstViewTitle>지금 무슨 일이 일어나고 있는</style.FirstViewTitle>
                    <style.FirstViewTitle>확인하세요!</style.FirstViewTitle>
                </div>
            </style.FirstViewBackground>
            <style.FirstViewBackground color="white">
                <div>
                <style.FirstViewTitle color="black" center="center">지금 바로 시작하세요.</style.FirstViewTitle>
                <style.ButtonWrapper>
                    <style.Wrapper>
                        <Link to="/SignUp">
                            <style.FirstViewButton type="button" value="가입하기"/>
                        </Link>
                        <Link to="/Login">
                            <style.FirstViewButton type="button" value="로그인"/>
                        </Link>
                    </style.Wrapper>
                </style.ButtonWrapper>
                </div>
            </style.FirstViewBackground>
        </style.View>
    );
}

export default FirstView;