import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";

export default class Signup extends Component {
  emailRegExp = (email) => {
    let matchEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    let emailMatchTestVal = matchEmail.test(email);
    return emailMatchTestVal
  }
  signupUser = (e) => {
    e.preventDefault();
    console.log("signup user ran");
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const name = e.target.name.value;
    const dob = e.target.dob.value;
    const formattedDob = new Date(dob)
    console.log('formattedDob', formattedDob)
    if (password !== confirm) {
      return alert("Passwords do not match");
    } else if (!email || !username || !password || !name || !dob) {
      return alert("All fields are required");
    } else if (!this.emailRegExp(email)) {
      return alert("Plese enter a valid email address");
    } else if (password.length < 8) {
      return alert("Password must be atleast 8 characters");
    } else if (name.length < 2) {
      return alert("Name must be at least 2 characters");
    } else if (formattedDob == 'Invalid Date') {
      return alert("Please enter a valid date of birth");
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
      <div className="background">
        <div className="vertical-elements">
          <h2 className="login-signup-header">Signup</h2>
          <div className="centered-form">
            <form onSubmit={this.signupUser} className="credentials-box">
              <div className="input-label">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="login-signup-inputs"
                  name="email"
                  placeholder="example@nomail.com"
                />
              </div>
              <div className="input-label">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="login-signup-inputs"
                  name="username"
                  placeholder="4 or more characters"
                />
              </div>
              <div className="input-label">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="login-signup-inputs"
                  type="password"
                  name="password"
                  placeholder="8 or more characters"
                />
              </div>
              <div className="input-label">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm password"
                  className="login-signup-inputs"
                  type="password"
                  name="confirm"
                  placeholder="confirm"
                />
              </div>
              <div className="input-label">
                <label htmlFor="Name">Name</label>
                <input id="name" className="login-signup-inputs" name="name" 
                  placeholder="Hi, what's your name?" />
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
        <div className="background" id="login-footer"></div>
      </div>
    );
  }
}
