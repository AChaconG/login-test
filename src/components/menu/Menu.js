import './Menu.css';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export function Menu() {
    const [section, setSection] = useState(null)

    return (
        <div>
            <div className='main'> 
                <h1 className='main'>{section}</h1>
            </div>
            <div className='sidenav'>
                    <a onClick={() => setSection('Section 1')} >Section 1</a>
                    <a onClick={() => setSection('Section 2')} >Section 2</a>
            </div>
            
        </div>
    );
  }




  
  
  