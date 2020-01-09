import React, { useState } from 'react'
import { Header } from '../Main/header'
import SearchContent from './SearchContent'
import * as style from '../../style/SearchStyle'

function Search(){

    const [contentCount,contentCountChange] = useState(5);

    return(
        <>
            <Header home={false} search={true} friend={false}/>
            <style.Background height="auto">
                <style.SearchMain height={contentCount > 3}>
                    <SearchContent/>
                    <SearchContent/>
                    <SearchContent/>
                    <SearchContent/>
                    <SearchContent/>
                    <SearchContent/>
                    <SearchContent/>
                </style.SearchMain>
            </style.Background>
        </>
    )
}

export default Search;