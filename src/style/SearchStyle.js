import styled from 'styled-components'

export const SearchInputDiv = styled.div`
    width:426px;
    height:68px;
    border:1px solid #F5988F;
    color:#F5988F;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const SearchInputButton = styled.button`
    width:34px;
    height:31px;
    background-image:url(${props => props.img});
    background-color:white;
`
export const SearchInput = styled.input`
    width:382px;
    height:58px;
    font-size:23px;
    outline:none;
`

export const SearchContentDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:884px;
    height:155px;
    border:1px solid #707070;
    margin:10px;
`

export const SearchContentImg = styled.img`
    width:66px;
    height:66px;
    border-radius:33px;
    border:1px solid #707070; 
`

export const SearchContentText = styled.p`
    font-size:24px;
    color:#707070;
    margin-left:30px;
`

export const SearchContentButton = styled.button`
    width:140px;
    height:56px;
    border-radius:80px;
    font-size:18px;
    background-color:${props => props.color ? "#F59990" : "white"};
    border:2px solid #F59990;
    transition:all 0.2s;
    color:${props => props.color ? "white" : "#F59990"};
    &:hover{
        background-color:${props => props.color ? "white" : "#F59990"};
        color:${props => props.color ? "#F59990" : "white" }
    }
    outline:none;
`

export const Background = styled.div`
    background-color:#F59990;
    width:100%;
    height:${props => props.height ? props.height : "90vh"};
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:700px;
`

export const SearchMain = styled.div`
    width:1154px;
    height:${props => props.height ? "auto" : "90vh"};
    background-color:white;
    margin-top:10vh;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding:30px;
`

export const SearchContentSide = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`