import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";

export default class Signup extends Component {
  signupUser = (e) => {
    e.preventDefault();
    console.log("signup user ran");
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const name = e.target.name.value;
    const dob = e.target.dob.value;
    if (password !== confirm) {
      return alert("Passwords do not match");
    }
    const user = {
      email,
      username,
      password,
      name,
      dob,
    };
    const URL = `${config.API_URL}/api/users`;
    fetch(URL, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div className="centered-form">
        <h2>Submit</h2>
        <div >
          <form onSubmit={this.signupUser} className="credentials-box">
            <div className="input-label">
              <label htmlFor="email">Email</label>
              <input id="email" className="login-signup-inputs" name="email" />
            </div>
            <div className="input-label">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="login-signup-inputs"
                name="username"
              />
            </div>
            <div className="input-label">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="login-signup-inputs"
                type="password"
                name="password"
              />
            </div>
            <div className="input-label">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirm password"
                className="login-signup-inputs"
                type="password"
                name="confirm"
              />
            </div>
            <div className="input-label">
              <label htmlFor="Name">Name</label>
              <input id="name" className="login-signup-inputs" name="name" />
            </div>
            <div className="input-label">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                className="login-signup-inputs"
                placeholder="ex: 02/20/2000"
                name="dob"
              />
            </div>
            <button>Signup</button>
            <Link to="/Demo">Demo</Link>
          </form>
        </div>
      </div>
    );
  }
}
