import React, { useState } from 'react';
import './style/reset.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as page from '../src/pages'
import axios from 'axios'

function App() {

  const [access_token,tokenChange] = useState(localStorage.getItem('access_token'));
  const refreshToken = localStorage.getItem("refresh_token");
  const refreshAccessToken = ()=> new Promise(function(success,error){
    axios.get("http://10.156.147.200:3000/api/user/refresh",{
        headers:{
            "x-refresh-token" : refreshToken,
        }
    })
    .then((req)=>{
        const newAccessToken = req.data.access_token;
        tokenChange(newAccessToken);
        localStorage.setItem("access_token",newAccessToken);
        success();
    })
    .catch((err)=>{
        window.location.href="/login";
        error();
    })
  })

  return (
      <Router>
        <Switch>
          <Route path="/Login" render={props => <page.Login refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/Signup" render={props => <page.SignUp refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/FindPassword" render={props => <page.FindPassword refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/Main" render={props => <page.TimeLine refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/Mypage" render={props =><page.Mypage refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/Follow" render={props => <page.FollowerView refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/Search" render={props => <page.Search refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
          <Route path="/" render={props => <page.FirstView refreshAccessToken={refreshAccessToken} changeToken={tokenChange} access_token={access_token}/>}/>
        </Switch>
      </Router>
  );
}

export default App;
