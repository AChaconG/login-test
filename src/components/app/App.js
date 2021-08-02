import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../home/Home';
import Layout from '../layout/Layout';
import Login from '../login/Login';



function App() {
  return (
    <Router>
      <div>
        <Home/> 
        <Route path='/layout' component={Layout}/>
        <Route path='/login' component={Login} />
      </div>
    </Router>
  );
}

export default App;
