import styled from 'styled-components'

export const TimeLineDiv = styled.div`
    width:100%;
`

export const TimeLineHeaderDiv = styled.div`
    width:100%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:white;
    position:fixed;
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
    padding:2px;
    transition:transform 0.5s;
    &:hover{
        border-bottom:${props => props.click ? "3px solid #FF4B39" : "3px solid #707070"};
        transform:translateY(-5px);
    }
`

export const TimeLineHeaderButtonImg = styled.img`
    width:40px;
    height:40px;
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
    justify-content:space-around;
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
    margin:10px;
    padding:0px 0px 0px 20px;
`

export const TimeLinePostImgDiv = styled.div`
    width:700px;
    /* display:flex; */
    margin:10px;
`

export const TimeLinePostImg = styled.img`
    width:330px;
    height:210px;
    border-radius:20px;
    margin:0px 5px 0px 0px;
`

export const TimeLinePostUserDiv = styled.div`
    width:200px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-right:70px;
`

export const TimeLinePostUserName = styled.p`
    font-size:24px;
    font-weight:600;
`

export const TimeLinePostUserImg = styled(TimeLineProImg)`
    width:60px;
    height:60px;
`

export const TimeLinePostUser = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const TimeLinePostHover = styled.div`
    width:20px;
    height:20px;
    background-image:url(${props=> props.src});
    background-repeat:no-repeat;
    &:hover{
        background-color:#F0F0F0;
        border-radius:15px;
    }
`

export const TimeLinePostHoverDiv = styled.div`
    width:30px;
    height:30px;
    border-radius:15px;
    &:hover{
        background-color:#F0F0F0;
    }
    display:flex;
    justify-content:center;
    align-items:center;
`

export const TimeLinePostTime = styled.p`
    font-size:16px;
    color:#707070;
`

export const TimeLinePostDelete = styled.button`
    width:156px;
    height: 42px;
    background-color:#FA8686;
    position:absolute;
    transform:translate(-120px,20px);
    display:${props => props.display ? "block" : "none"};
    font-size:20px;
    color:white;
    font-weight:600;
    outline:none;
`

export const Background = styled.div`
    background-color:#F59990;
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:${props => props.margin};
`

export const TimeLineMain = styled.div`
    width:1160px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    background-color:white;
    margin-top:10vh;
`
export const TimeLinePostCommentDiv = styled.div`
    width:900px;
    height:70px;
    display:flex;
    align-items:center;
    /* justify-content:space-around; */
`

export const TimeLinePostCommentInputDiv = styled.div`
    width:700px;
    height:58px;
    border-radius:15px;
    border:1px solid #707070;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const TimeLinePostCommentInput = styled.input`
    width:600px;
    height:54px;
    border:none;
    outline:none;
    font-size:20px;
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
    margin:0px 25px 0px 20px;
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
    width:${props => props.width ? props.width : 140}px;
    height:${props => props.height ? props.height : 40}px;
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
    opacity:0.7;
    background-color:white;
    /* filter:blur(10px); */
    display:${props => props.click ? "block" : "none"};
    transition:all 2s;
`

export const TimeLineHeaderFollowRequest = styled.div`
    height:500px;
    width:400px;
    background-color:white;
    position: absolute;
    display:${props => props.display};
    transform : translate(-250px,320px);
`

export const FollowRequestTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #FA8686; 
    position:absolute;
    transform:translate(-120px,90px);
    display:${props => props.display};
`

export const FollowRequestLabel = styled.label`
    width:40px;
    height:58px;
    margin:50px;
    background-image:url(${props => props.src});
`

export const FollowRequestButton = styled.input`
    /* display:none; */
    width:0px;
    height:0px;
    outline:none;
`

export const FollowRequestHeader = styled.div`
    width:100%;
    height:50px;
    background-color:#FA8686;
    display:flex;
    align-items:center;
    /* padding:10px; */
`

export const FollowRequestTitle = styled.p`
    font-size:22px;
    color:white;
    font-weight:600;
    margin-left:10px;
`

export const FollowRequestContent = styled.div`
    width:96%;
    margin:2%;
    height:77px;
    border:1px solid #F59990;
    display:flex;
    justify-content:space-around;
`

export const FollowRequestContents = styled.div`
    width:100%;
    height:430px;
    flex-wrap:wrap;
    margin-top:5px;
    overflow:scroll;
`

export const FollowRequestContentButton = styled.button`
    background-color:#FFD2CC;
    color:white;
    width:66px;
    height:27px;
    border-radius:33px;
    outline:none;
`

export const FollowRequestContentImg = styled.img`
    width:52px;
    height:52px;
    border-radius:1px solid #707070;
    border-radius:26px;
`

export const FollowRequestContentText = styled.p`
    color:#757575;
    font-size:22px;
    font-weight:600;
`

export const FollowRequestContentSide = styled.div`
    width:150px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const CommentView = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const CommentViewPro = styled.img`
    width:52px;
    height:52px;
    border-radius:26px;
`

export const CommentViewTextDiv = styled.div`
    width:700px;
    height:100px;
    border:1px solid #FF0000;
`

export const CommentViewText = styled.p`
    font-size:20px;
    color:#707070;
    padding:5px;
`

export const CommentViewUser = styled.div`
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
`

export const CommentViewUserName = styled.p`
    font-size:22px;
    color:#707070;
    font-weight:600;
`