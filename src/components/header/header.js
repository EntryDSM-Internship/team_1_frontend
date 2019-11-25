import React from 'react'
import {Header, HeaderText} from '../../style/otherStyle';

function MainHeader({children}){
    return(
        <Header>
            <HeaderText color="#707070">{children}</HeaderText>
        </Header>
    );
}

export default MainHeader;