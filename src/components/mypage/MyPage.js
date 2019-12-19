import React, { useEffect, useRef, useState } from 'react'
import { Background } from '../../style/otherStyle'
import { Header } from '../Main/header'
import * as style from '../../style/mypageStyle'
import * as profile from './profile'
import { Post } from '../Main/post'

function MyPage(){

    return(
        <div>
            <Header friend={true}/>
            <Background height="auto">
                <style.MyPageBody>
                    <style.MypagePro>
                        <label>
                            <style.MyPageProImg alt="프로필 사진" src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"/>
                            <style.MyPageProImgInput type="file"/>
                        </label>
                        <style.MypageInfo>
                            <profile.MypageUserInfo/>
                            <profile.MypageFollowInfo/>
                            <profile.MypageModify/>
                        </style.MypageInfo>
                    </style.MypagePro>
                    <Post></Post>
                </style.MyPageBody>
            </Background>
        </div>
    );
}

export default MyPage;