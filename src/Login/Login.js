import React from "react";

export default function Login() {
  return (
    <div className='centered-form'>
      <form className="credentials-box">
        <div className="input-label">
          <label for="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-label">
          <label for="password">Password</label>
          <input id="password" />
        </div>
      </form>
    </div>
  );
}
