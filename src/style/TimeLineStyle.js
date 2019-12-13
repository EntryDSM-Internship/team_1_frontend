import styled from 'styled-components'

export const TimeLineDiv = styled.div`
    width:100%;
`

export const TimeLineHeaderDiv = styled.div`
    width:100%;
    height:120px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:white;
`

export const TimeLineHeaderButtonDiv = styled.div`
    width:60%;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const TimeLineHeaderButton = styled.div`
    width:140px;
    height:50px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    border-bottom:${props => props.click ? "2px solid #FF4B39": "2px solid #707070"};
    padding:${props => props.click ? "5px" : "2px"};
    transition:transform 0.5s;
    &:hover{
        border-bottom:${props => props.click ? "3px solid #FF4B39" : "3px solid #707070"};
        transform:translateY(-5px);
    }
`

export const TimeLineHeaderButtonImg = styled.img`
    width:${props =>props.click ? "48px" : "40px"};
    height:${props =>props.click ? "48px" : "40px"};
`

export const TimeLineProImg = styled.img`
    width:80px;
    height:80px;
    border-radius:50px;
    box-shadow:0px 0px 3px 1px gray;
    transition:all 0.3s;
    &:hover{
        transform:translateY(-3px);
    }
`

export const TimeLineSide = styled.div`
    width:400px;
    height:120px;
    display:flex;
    justify-content:center;
    align-items:center;
`


export const TimeLine = styled.div`

`

export const TimeLinePost = styled.div`
    width:880px;
    margin:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding:10px;
    box-shadow:0px 0px 3px 1px #707080;
    border-radius:3px;
`

export const TimeLinePostText = styled.div`
    width:700px;
    font-size:20px;
    color:#707070;
    margin:15px;
`

export const TimeLinePostImgDiv = styled.div`
    width:720px;
    display:flex;
    margin:10px;
`

export const TimeLinePostImg = styled.img`
    width:340px;
    height:210px;
    border-radius:20px;
    margin:0px 10px;
`

export const TimeLinePostUserName = styled.p`
    padding:10px;
    padding-left:50px;
    font-size:24px;
    font-weight:600;
`

export const TimeLinePostUserImg = styled(TimeLineProImg)`
    width:60px;
    height:60px;
`

export const TimeLinePostUser = styled.div`
    width:90%;
    display:flex;
`

export const Background = styled.div`
    background-color:#F59990;
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const TimeLineMain = styled.div`
    width:1160px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    background-color:white;
`
export const TimeLinePostCommentDiv = styled.div`
    width:900px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const TimeLinePostCommentInputDiv = styled.div`
    width:795px;
    height:58px;
    border-radius:15px;
    border:1px solid #707070;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const TimeLinePostCommentInput = styled.input`
    width:700px;
    height:54px;
    border:none;
    outline:none;
    font-size:20px;
    padding-left:20px;
`
export const TimeLinePostCommentButton = styled.button`
    width:55px;
    height:40px;
    border-radius:17px;
    border:1px solid #707070;
`

export const TimeLinePostLike = styled.button`
    display:none;
`

export const TimeLinePostLikeLabel = styled.label`
    width:40px;
    height:40px;
    background-image:url(${props => props.src});
`

export const TimeLinePostImgDelete = styled.button`
    width:30px;
    height:30px;
    font-size:30px;
    transform:translate(300px,-210px);
    background-color: hsl(120, 60%, 70%,0);
    color:black;
    outline:none;
`

export const TimeLineWriteDiv = styled.div`
    width:1000px;
    /* height:200px; */
    box-shadow:0px 0px 3px 1px #787078;
    margin:20px;
    border-radius:3px;
`

export const TimeLineWriteInput = styled.textarea`
    width:960px;
    height:100px;
    resize:none;
    font-size:20px;
    color:#707070;
    outline:none;
    padding:20px;
`

export const TimeLineWriteImgButtonLabel = styled.label`
    width:32px;
    height:32px;
    margin:8px;
    margin-left:15px;
    background-image:url(${props => props.src});
    background-position:center center;
`

export const TimeLineWriteImgButton = styled.input`
    display:none;
`

export const TimeLineWriteButton = styled.button`
    width:140px;
    height:40px;
    border-radius:50px;
    border:3px solid #FF7676;
    color:#FF7676;
    background-color:white;
    font-size:25px;
    font-weight:600;
    transition: background-color 0.3s , color 0.1s;
    &:hover{
        background-color:#FF7676;
        color:white;
    }
`

export const TimeLineWriteButtonDiv = styled.div`
    width:98%;
    display:flex;
    justify-content:flex-end;
    margin:5px;
    align-items:center;
    /* transform:translateX(-30px); */
`

export const TimeLineWriteImg = styled(TimeLinePostImg)``

export const TimeLineWriteImgsDiv = styled(TimeLinePostImgDiv)`
    display:${props => props.on ? "flex" : "none"};
    overflow:scroll;
    width:980px;
`

export const TimeLineWriteImgDiv = styled.div`
    width:340px;
    padding:0px 10px;
`

export const TimeLineBlur = styled.div`
    width:100%;
    height: ${props => props.height}px;
    position:absolute;
    background-color:black;
    filter:blur(4px);
    display:${props => props.click ? "block" : "none"};
`
