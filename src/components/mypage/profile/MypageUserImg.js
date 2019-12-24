import React from 'react'
import * as style from '../../../style/mypageStyle'

function MyPageUserImg(){
    return(
        <label>
            <style.MyPageProImg alt="프로필 사진" src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"/>
            <style.MyPageProImgInput accept=".gif, .jpg, .png" type="file"/>
        </label>
    )
}

export default MyPageUserImg