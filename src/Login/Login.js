import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="centered-form">
      <Link to="/Demo">Demo</Link>
      <form className="credentials-box" onSubmit={this.props.submitLogin}>
        <div className="input-label">
          <label for="username">Username</label>
          <input id="username" name="username" />
        </div>
        <div className="input-label">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  )};
}
