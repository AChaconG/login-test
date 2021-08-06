import './Login.css';
import React, { useState } from 'react';


function Login(props) {  
  const [user, setUser] = useState({userEmail: '', userPassword: ''})
  const [details, setDetails] = useState({userEmail: '', userPassword: ''})
  const [error, setError] = useState('')
  
  const handleChange = e => {
    const {name, value} = e.target;
    setDetails((previousState) => ({
      ...previousState,
      [name]: value
    }))
  }

  const submitHandler = e => {
    if (props.userFromDatabase.userEmail == details.userEmail && props.userFromDatabase.userPassword == details.userPassword) {
      setUser({ 
        userEmail: details.userEmail,
        userPassword: details.userPassword
      })
    } else {
        setError('Details do not match')
    }
    e.preventDefault();
  }

  const handleLogout = () => {
    setUser({userEmail:'', userPassword:''});
    setError('');
  }
  
  
  return (
    <div>
    {(user.userEmail === '') ? (
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>
          {(error != '') ? (<div>{error}</div>) : ''}
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={details.userEmail} onChange={handleChange} name='userEmail'></input>
          <br/>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' value={details.userPassword} onChange={handleChange} name='userPassword'></input>
          <br/>
          <input type='submit' value='Submit' id='submit'></input>
        </div>
      </form>
      ) : (
        <div>
        < h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>
      )
    }
    </div>
  );
}

export default Login;

