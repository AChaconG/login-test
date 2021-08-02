import './Layout.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function Layout() {
  return (
    <div>
        <Link to='/layout/menu'> 
            <a className='button'>Go to Menu</a>
        </Link> 
    </div>
  );
}

export default Layout;