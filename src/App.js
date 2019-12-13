import React from 'react';
import './style/reset.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, FirstView, TimeLine, FindPassword, SignUp} from '../src/pages'

function App() {
  return (
      <Router>
        <Route exact path="/" component={FirstView}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Signup" component={SignUp}></Route>
        <Route path="/FindPassword" component={FindPassword}></Route>
        <Route path="/Main" component={TimeLine}/>
      </Router>
  );
}

export default App;
