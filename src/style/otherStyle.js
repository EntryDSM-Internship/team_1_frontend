import styled from 'styled-components'

/* Login */

export const View = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    display:${props=>props.display ? props.display : "block"};
`

export const Header = styled.div`
    width:100%;
    height:9vh;
    border:1px solid #707070;
    z-index:1;
    background-color:white;
    position:relative;
`

export const HeaderText = styled.p`
    font-size:60px;
    color: ${props=> props.color ? props.color : "#F59990"};
    text-align:center;
    font-weight:600;
`

export const Background = styled.div`
    background-color:#F59990;
    width:100%;
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const LoginBody = styled.div`
    width:1154px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    z-index:1;
`
export const LoginWrapper = styled.div`
    width:477px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

export const LoginInput = styled.input`
    width:477px;
    height:70px;
    border:none;
    outline:none;   
    font-size:24px;
    color:#707070;  
    margin:20px;
    border-bottom:2px solid #707070;
    &:focus{
        border-bottom:2px solid #F59990;
    }
`

export const LoginButton = styled.input`
    width:200px;
    height:70px;
    border:4px solid #F59990;
    color:#F59990;
    font-size:28px;
    text-align:center;
    border-radius:100px;
    margin:50px;
    font-weight:600;
    transition:color 0.2s , background-color 0.2s;
    background-color:white;
    &:hover{
        background-color:#F59990;
        color:white;
    }
`

export const LoginErrorMessage = styled.p`
    width:100%;
    font-size:20px;
    font-weight:600;
    margin-left:15px;
`

export const LoginHelpButton = styled.button`
    font-size:18px;
    color:#707070;
    text-decoration:underline;  
    background-color:white;
`

export const LoginHelpDiv = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`

export const LoginHelpText = styled.p`
    font-size:18px;
    color:#707070;
`

export const BackgroundCircle = styled.div`
    /* width:10px;
    height:10px; */
    background-color:#FF6F61;
    filter:blur(30px);
    box-shadow:0px 0px 100px 300px #FF6F61; 
    opacity:0.3;
    border-radius:400px;    
    position:absolute;
    transform:translate(${props=>props.x}px,${props=>props.y}px);
`
/* First View */

export const FirstViewBackground = styled(Background)`
    height:100vh;
    width:50%;
    color : white;
    background-color:${props=>props.color ? "white" : "#F59990"};
    flex-wrap:wrap;
`

export const FirstViewTitle = styled.p`
    color:${props=> props.color ? props.color : "white"};
    font-size:60px;
    font-weight:600;
    width:auto;
    /* text-align:center; */
    text-align:${props=>props.center ?  props.center : ""};
`

export const ButtonWrapper  = styled.div`
    /* width:400px; */
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:100px;
`

export const Wrapper = styled.div`
    width:${props => props.width ? props.width : "400px"};
`

export const FirstViewButton = styled(LoginButton)`
    width:400px;
    height:80px;
    margin:30px;
    background-color:white;
`

/* signup*/

export const SignUpBody = styled(LoginBody)``

export const SignUpInput = styled(LoginInput)`
    width:477px;
    height:70px;
    border-bottom: 1px solid #707070;
    margin:0px;
    margin-bottom:${props => props.margin ? props.margin : "30px"};
    &:focus{
        border-bottom:1px solid #F59990
    }
`

export const SignUpErrorMessage = styled(LoginErrorMessage)``

export const SignUpButton = styled(LoginButton)``

export const SignUpWrapper = styled(LoginWrapper)`
    width:680px;
`

export const EmailCheckButton = styled.button`
    width:90px;
    height:54px;
    border:1px solid #707070;
    border-radius:22px;
`

export const SignUpInputDiv = styled.div`
    width:477px;
    height:70px;
    border-bottom:${props => props.borderBottom ? props.borderBottom : "1px solid #707070"};
    display:flex;
    align-items:center;
`

export const SignUpPage = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
`

export const SubTitle = styled.p`
    font-size:40px;
    font-weight:600;
    margin-bottom:${props=> props.margin ? props.margin+"px" : "70px"};
`

export const SignUpImg = styled.img`
    margin:20px 100px 20px 100px;
`

export const EmailInput = styled(SignUpInput)`
    width:400px;
    height:70px;
    margin:0px;
    border-bottom:0;
    &:focus{
        border-bottom:0;
    }
`