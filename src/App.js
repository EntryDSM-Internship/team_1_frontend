import React from 'react';
import './style/reset.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as page from '../src/pages'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/Login" component={page.Login}></Route>
          <Route path="/Signup" component={page.SignUp}></Route>
          <Route path="/FindPassword" component={page.FindPassword}></Route>
          <Route path="/Main" component={page.TimeLine}/>
          <Route path="/Mypage" component={page.Mypage}></Route>
          <Route path="/Follow" component={page.FollowerView}></Route>
          <Route path="/" component={page.FirstView}></Route>
        </Switch>
      </Router>
  );
}

export default App;
