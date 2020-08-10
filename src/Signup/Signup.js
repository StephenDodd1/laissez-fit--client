import React from "react";
import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div className='centered-form'>
      <form className='credentials-box'>
        <div className="input-label">
          <label for="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-label">
          <label for="password">Password</label>
          <input id="password" />
        </div>
        <div className="input-label">
          <label for="confirm-password">Confirm Password</label>
          <input id="confirm password" />
        </div>
        <div className="input-label">
          <label for="Name">Name</label>
          <input id="name" />
        </div>
        <div className="input-label">
          <label for="dob">Date of Birth</label>
          <input id="dob" />
        </div>
        <button>Signup</button>
        <Link to='/Demo'>Demo</Link>
      </form>
    </div>
  );
}
