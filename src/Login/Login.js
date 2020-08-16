import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = UserContext;
  render() {
    const renderDemoOrUser = this.context.user.name ? (
      <p>
        Hey {this.context.user.name},&ensp;
        <Link to="/Tracking">go to your logs</Link>
      </p>
    ) : (
      <Link to="/Demo">Demo</Link>
    );
    return (
      <div className="centered-form">
        <form className="credentials-box" onSubmit={this.props.submitLogin}>
        {renderDemoOrUser}
          <div className="input-label">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" />
          </div>
          <div className="input-label">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }
}
