import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
      <div>
        <Link to='/layout'>
            <a className='button1'>layout</a>
        </Link>
        <Link to='/login'>
            <a className='button2'>login</a>
        </Link>
      </div>
  );
}

export default Home;
