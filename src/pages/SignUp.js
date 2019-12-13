import React , { useState , useEffect , useRef } from 'react';
import SignUpView from '../components/SignUp/SignUpView';
import { SignUpPage } from '../style/otherStyle'

function SignUp(props){
    const [page , changePage] = useState(1);
    let pages = useRef(null);
    const ChangePage = () =>{
        changePage(page+1);
        // console.log(page);
    }

    const movePage = ()=>{
        console.log(pages);
    }

    useEffect(()=>{
        movePage();
    })
    return(
        <>
            <SignUpPage>
                <SignUpView page={page} changePage={ChangePage}></SignUpView>
            </SignUpPage>
        </>
    );
}

export default SignUp;