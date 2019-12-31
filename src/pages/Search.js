import React, { useEffect, useState } from 'react'
import { Header } from '../components/Main/header'
import SearchContent from '../components/search/SearchContent'
import * as style from '../style/SearchStyle'

function Search({access_token,refreshAccessToken}){

    const [contentCount,contentCountChange] = useState(3);

    return(
        <>
            <Header home={false} search={true} friend={false} access_token={access_token} refreshAccessToken={refreshAccessToken}/>
            <style.Background height="auto">
                <style.SearchMain height={contentCount > 3}>
                    <div>
                        <SearchContent/>
                        <SearchContent/>
                        <SearchContent/>
                    </div>
                </style.SearchMain>
            </style.Background>
        </>
    )
}

export default Search;