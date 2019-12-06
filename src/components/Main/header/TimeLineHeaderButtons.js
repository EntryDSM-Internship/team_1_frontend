import React from 'react'
import { Link } from 'react-router-dom'
import * as style from '../../../style/TimeLineStyle'
import * as img from '../../../img'

function TimeLineHeaderButtons({home,friend,search}){
    console.log(home,search,friend)
    return(
            <style.TimeLineHeaderButtonDiv>
                <Link to="/mypage">
                    <style.TimeLineHeaderButton click={friend}>
                        <style.TimeLineHeaderButtonImg src={friend ? img.friend_hover : img.friend} alt="마이페이지"/>
                    </style.TimeLineHeaderButton>
                </Link>
                <Link to="/Main">
                    <style.TimeLineHeaderButton click={home}>
                        <style.TimeLineHeaderButtonImg src={home ? img.home_hover : img.home} alt="홈"/>
                    </style.TimeLineHeaderButton>
                </Link>
                <Link to="/search">
                    <style.TimeLineHeaderButton click={search}>
                        <style.TimeLineHeaderButtonImg src={img.search} alt="검색"/>
                    </style.TimeLineHeaderButton>
                </Link>
            </style.TimeLineHeaderButtonDiv>
    );
}

export default TimeLineHeaderButtons