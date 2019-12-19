import React from 'react'
import { MypageInfoButton, MypageInfoWrapper } from '../../../style/mypageStyle'

function MypageModify(){
    return(
        <MypageInfoWrapper display="flex-end">
            <MypageInfoButton>수정하기</MypageInfoButton>
        </MypageInfoWrapper>
    );
}

export default MypageModify;