import React from 'react';
import FirstView from './components/FirstView/firstView';
import './style/reset.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import FindPassword from './components/findPassword/FindPassword'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <Route path="/Login" component={Login}></Route>
        <Route exact path="/" component={FirstView}></Route>
        <Route path="/Signup" component={SignUp}></Route>
        <Route path="/FindPassword" component={FindPassword}></Route>
      </Router>
  );
}

export default App;
