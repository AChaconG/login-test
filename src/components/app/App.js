import './App.css';
import React from 'react';
import Home from '../home/Home';
import Layout from '../layout/Layout';
import Login from '../login/Login';
import { Menu } from '../menu/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home}/> 
          <Route path='/login' component={Login} />
          <Route path='/layout' exact  component={Layout}/>
          <Route path='/layout/menu/' component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
