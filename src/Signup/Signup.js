import React from "react";
import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div className='centered-form'>
      <form className='credentials-box'>
        <div className="input-label">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-label">
          <label htmlFor="password">Password</label>
          <input id="password" type='password' />
        </div>
        <div className="input-label">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input id="confirm password" type='password' />
        </div>
        <div className="input-label">
          <label htmlFor="Name">Name</label>
          <input id="name" />
        </div>
        <div className="input-label">
          <label htmlFor="dob">Date of Birth</label>
          <input id="dob" placeholder='ex: 02/20/2000' />
        </div>
        <button>Signup</button>
        <Link to='/Demo'>Demo</Link>
      </form>
    </div>
  );
}
