import './App.css';
import React from 'react';
import Home from '../home/Home';
import Layout from '../layout/Layout';
import Login from '../login/Login';
import { Menu , Section1, Section2 } from '../menu/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (
    <Router>
      <div>
      
        {/* <Switch> */}
          <Route path='/' exact component={Home}/> 
          <Route path='/login' component={Login} />
          <Route path='/layout' exact  component={Layout}/>

        {/* </Switch> */}
        <Route path='/layout/menu/' component={Menu} />
        <Route path='/layout/menu/section1' component={Section1} />
        <Route path='/layout/menu/section2' component={Section2} />
      </div>
    </Router>
  );
}

export default App;
