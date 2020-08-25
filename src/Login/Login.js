import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

export default class Login extends Component {
  static contextType = UserContext;
  render() {
    const renderDemoOrUser = this.context.name ? (
      <p>
        Hey {this.context.name},&ensp;
        <Link to="/Demo">go to your logs</Link>
      </p>
    ) : (
      <Link to="/Demo">Demo</Link>
    );
    console.log(this.context.user_id);
    return (
      <div>
        <div className="background">
          <div className="vertical-elements">
            <h2 className="login-signup-header">Login</h2>
            <div className="centered-form">
              <form
                className="credentials-box"
                onSubmit={this.props.submitLogin}
              >
                {renderDemoOrUser}
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
                    name="password"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
        <div className="background"></div>
      </div>
    );
  }
}
