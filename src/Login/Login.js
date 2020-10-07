import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../context";

class Login extends Component {
  static contextType = UserContext;
  onLoginSuccess = () => {
    return this.props.history.push("/Tracker")
  };
  render() {
    if(this.context.name){
      this.onLoginSuccess() 
    }
    return (
      <div>
        <div className="background">
          <div className="vertical-elements">
            <h2 className="login-signup-header">Login</h2>
            <div className="centered-form">
              <form
                className="credentials-box"
                onSubmit={this.props.submitLogin}
                id='login-form'
              >
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
        <div className="background" id="login-footer"></div>
      </div>
    );
  }
}

export default withRouter(Login)