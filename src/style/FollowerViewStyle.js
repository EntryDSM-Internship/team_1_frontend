import styled from 'styled-components'

export const FollowerView = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    padding-top:10vh;
    justify-content:center;
    background-color:#F59990;
`

export const FollowerViewMain = styled.div`
    width:1154px;
    height:100%;
    background-color:white;
`

export const FollowerViewChoiceButtonDiv = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const FollowerViewChoiceButton = styled.button`
    width:157px;
    height:48px;
    font-size:36px;
    transition:all 0.2s;
    border:none;
    background-color:white;
    border-bottom:${props => props.click ? "2px solid #FA8579" : "0px"};
    color:${props => props.click ? "#FA8579" : "#757575"};
    outline:none;
    &:hover{
        transform:translateY(-5px);
        color:#FA8579;
    }
    font-weight:600;
`

export const FollowerViewContentDiv = styled.div`
    width:100%;
    height:200px;
    border-top: 1px solid #FA8579;
    border-bottom: 1px solid #FA8579;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const FollowerViewContents = styled.div`
    width:100%;
    height:auto;
    overflow:scroll;
`

export const FollowerViewImg = styled.img`
    width:125px;
    height:125px;
    border-radius:70px;
    box-shadow:0px 0px 5px 1px #707070;
    margin-right:20px;
`

export const FollowerViewUserName = styled.p`
    font-size:25px;
    font-weight:600;
    color:#757575;
`

export const FollowerViewButton = styled.button`
    width:171px;
    height: 69px;
    border-radius:14px;
    border:2px solid #FFD2CC;
    background-color:white;
    color:#757575;
    font-weight:600;
    font-size:25px;
    outline:none;
    transition:all 0.2s;
    &:hover{
        background-color:#FFD2CC;
        color:white;
    }
`

export const FollowerViewSide = styled.div`
    width:300px;
    display:flex;
    justify-content:${props => props.display};
    align-items:center;
    /* margin:50px; */
`

export const FollowerViewWrapper = styled.div`
    overflow:hidden;
`
