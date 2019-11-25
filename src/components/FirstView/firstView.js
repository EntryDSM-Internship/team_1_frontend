import React from 'react'
import {Background , Wrapper , FirstViewTitle , View , FirstViewButton , ButtonWrapper} from '../../style/otherStyle';
import { Link } from 'react-router-dom'

function FirstView(){
    return(
        <View display="flex">
            <Background>
                <div>
                    <FirstViewTitle>전세계에 있는 친구들과</FirstViewTitle>
                    <FirstViewTitle>지금 무슨 일이 일어나고 있는</FirstViewTitle>
                    <FirstViewTitle>확인하세요!</FirstViewTitle>
                </div>
            </Background>
            <Background color="white">
                <div>
                <FirstViewTitle color="black" center="center">지금 바로 시작하세요.</FirstViewTitle>
                <ButtonWrapper>
                    <Wrapper>
                        <Link to="/SignUp">
                            <FirstViewButton type="button" value="가입하기"></FirstViewButton>
                        </Link>
                        <Link to="/Login">
                            <FirstViewButton type="button" value="로그인"></FirstViewButton>
                        </Link>
                    </Wrapper>
                </ButtonWrapper>
                </div>
            </Background>
        </View>
    );
}

export default FirstView;