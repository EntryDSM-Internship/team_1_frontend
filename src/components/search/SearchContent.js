import React from 'react'
import * as style from '../../style/SearchStyle'

function SearchContent({follow}){
    return(
        <style.SearchContentDiv>
            <style.SearchContentSide>
                <style.SearchContentImg alt="검색 이미지"/>
                <style.SearchContentText>이름</style.SearchContentText>
            </style.SearchContentSide>
            <style.SearchContentSide>
            <style.SearchContentButton>{follow ? "팔로워" : "팔로잉"}</style.SearchContentButton>
            </style.SearchContentSide>
        </style.SearchContentDiv>
    )
}

export default SearchContent;