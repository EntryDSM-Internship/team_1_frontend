import React, { useEffect, useRef, useState } from 'react'
import { Background } from '../style/otherStyle'
import { Header } from '../components/Main/header'
import * as style from '../style/mypageStyle'
import { MypageUserInfo, MypageFollowInfo, MypageModify, MypageUserImg } from '../components/mypage/profile'
import { Post } from '../components/Main/post'

function MyPage(){

    return(
        <div>
            <Header friend={true}/>
            <Background height="auto">
                <style.MyPageBody>
                    <style.MypagePro>
                        <MypageUserImg/>
                        <style.MypageInfo>
                            <MypageUserInfo/>
                            <MypageFollowInfo/>
                            <MypageModify/>
                        </style.MypageInfo>
                    </style.MypagePro>
                    <Post/>
                </style.MyPageBody>
            </Background>
        </div>
    );
}

export default MyPage;