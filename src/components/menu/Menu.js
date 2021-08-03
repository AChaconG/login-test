import './Menu.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export function Menu() {
    return (
        <div class='sidenav'>
            <Link to='/layout/menu/section1'>
                <a>Section 1</a>
            </Link>
            <Link to='/layout/menu/section2'>
                <a>Section 2</a>
            </Link>
        </div>
    );
  }


export function Section1() {
    return (
    <div>
    <h2>Section 1</h2>
    <a href='https://duckduckgo.com/?q=export+react&atb=v261-1&ia=web'>link</a>
    </div>
    )
  }
  
export function Section2() {
    return <h2>Section 2</h2>;
}

  
  
  