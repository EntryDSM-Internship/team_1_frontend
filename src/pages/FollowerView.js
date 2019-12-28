import React, { useState } from 'react'
import * as style from '../style/FollowerViewStyle'
import { Header } from '../components/Main/header'
import { FollowerViewContent } from '../components/FollowerView'

function FollowerView(){

    const [ isCheck,checkChange ] = useState({"follower": false , "follow":true});

    return(
        <>
            <Header></Header>
            <style.FollowerView>
                <style.FollowerViewMain>
                    <style.FollowerViewChoiceButtonDiv>
                        <style.FollowerViewChoiceButton onClick={()=>{checkChange({"follower": true , "follow":false})}} click={isCheck.follower}>팔로워</style.FollowerViewChoiceButton>
                        <style.FollowerViewChoiceButton onClick={()=>{checkChange({"follower": false , "follow":true})}} click={isCheck.follow}>팔로우</style.FollowerViewChoiceButton>
                    </style.FollowerViewChoiceButtonDiv>
                    <style.FollowerViewContents>
                        <FollowerViewContent></FollowerViewContent>
                    </style.FollowerViewContents>
                </style.FollowerViewMain>
            </style.FollowerView>
        </>
    )
}

export default FollowerView;