import styled from 'styled-components'

export const MyPageBody = styled.div`
    width:1154px;
    height:${props => props.height ? "auto" : "90vh"};
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    z-index:1;
    flex-wrap:wrap;
`

export const MyPageProImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin:40px 0px 0px 200px;
    background-position:center;
`

export const MyPageProImgInput = styled.input`
    display:none;
`

export const MypagePro = styled.div`
    width:100%;
    height:350px;
    display:flex;
    align-self:flex-start;
    justify-content:space-between;
    margin:50px 0px 50px 0px;
`

export const MypageInfo = styled.div`
    width:55%;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

export const MypageInfoWrapper = styled.div`
    width:80%;
    display:flex;
    justify-content:${props => props.display ? props.display : "space-between"};
`
export const MypageInfoTextDiv = styled.div`
    width:200px;
`

export const MypageInfoText = styled.p`
    font-size:20px;
    color:#7C7C7C;
    text-align:start;
`

export const MypageInfoInput = styled.input`
    border:none;
    width:200px;
    color:#7C7C7C;
    font-size:20px;
    text-align:center;
    border-bottom:1px solid black;
    outline:none;
    &:focus{
        border-bottom:2px solid black;
        color: #F59990;
    }

    &:hover{
        border-bottom:2px solid black;
    }
`

export const MyPageInfoFollowDiv = styled.div`

`

export const MypageInfoFollow = styled.div`
    width:200px;
    height:60px;
    border-radius:50px;
    border:2px solid #F59990;
    background-color:white;
    font-size:24px;
    color:#7C7C7C;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const MypageInfoColoredText = styled.p`
    font-size:24px;
    color:#F59990;
`

export const MypageInfoButton = styled.button`
    width:120px;
    height:50px;
    border-radius:60px;
    color:white;
    font-size:20px;
    background-color:#F59990;
    margin:10px;
`

export const Background = styled.div`
    background-color:#F59990;
    width:100%;
    height:${props => props.height ? props.height : "90vh"};
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:700px;
    padding-top:10vh;
`