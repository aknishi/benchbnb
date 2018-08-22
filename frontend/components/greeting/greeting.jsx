import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return(
      <div>
        <h2>Welcome, {currentUser.username} !</h2>
        <button onClick={logout}>Sign out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/signup'>Sign Up!</Link>
      </div>
    )
  }
};

export default Greeting;
