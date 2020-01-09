import React from 'react'
import * as style from '../../../style/mypageStyle'

function MyPageUserImg({src}){
    return(
        <label>
            <style.MyPageProImg alt="프로필 사진" src={`http://10.156.147.200:3000/${src}`}/>
            <style.MyPageProImgInput accept=".gif, .jpg, .png" type="file"/>
        </label>
    )
}

export default MyPageUserImg