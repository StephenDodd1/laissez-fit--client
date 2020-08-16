import React, { Component } from "react";
import logo from "./Laissezfit.svg";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Demo from "./Demo/Demo";
import Tracking from './Tracking/Tracking'
import Articles from "./Articles/Articles";
import Article from "./Article/Article";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import { JWT_TOKEN, API_URL } from "./config.js";
import { UserContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        user_id: null,
        username: null,
        name: null
      },
    };
    this.logout = this.logout.bind(this);
  }
  static contextType = UserContext;
  logout() {
    console.log("logout ran");
    this.setState({ user: {} });
  }
  login(userid) {
    this.setState({ user: { user_id: userid } });
  }
  setUsername(username) {
    this.setState({ user: { username: username } });
  }
  setUserName(name) {
    this.setState({ user: {name: name}})
  }

  submitLogin = (e) => {
    e.preventDefault();
    const un = e.target.username.value;
    const pw = e.target.password.value;
    console.log("un", un, "pw", pw);
    const userToken = btoa(`${un}:${pw}`);
    fetch(`${API_URL}/api/user`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `basic ${userToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error({ error: { message: "login failed" } });
        }
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem(JWT_TOKEN, data.data.jwtToken);
        this.login(data.data.user.id);
        this.setUsername(data.data.user.username);
        this.setUserName(data.data.user.name)
      });
  };
  render() {
    const renderLoginOrLogout =
      this.state.user.user_id !== null ? (
        <div className="link">
          <a href="Logout">logout</a>
        </div>
      ) : (
        <div className="links">
          <Link to="/Login">login</Link>
          <Link to="/Signup">signup</Link>
        </div>
      );
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
    };
    return (
      <UserContext.Provider value={value}>
        <div className="App">
          <header className="App-header">
            {renderLoginOrLogout}
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Laissez.fit</h1>
          </header>
          <Switch>
            <Route exact path="/">
              <Redirect to="/Landing" />
            </Route>
            <Route path="/Landing" render={() => <Landing />} />
            <Route path="/Signup" render={() => <Signup />} />
            <UserContext.Consumer>
              {({ user, logoutUser }) => {
                return (
                  <>
                    <Route
                      path="/Login"
                      render={() => (
                        <Login
                          submitLogin={this.submitLogin}
                          user={user}
                          logoutUser={logoutUser}
                        />
                      )}
                    />
                    <Route path="/Demo" render={() => <Demo user={user} />} />
                    <Route
                      path="/Tracking"
                      render={() => <Tracking user={user} />}
                    />
                    <Route
                      path="/Articles"
                      render={() => <Articles user={user} />}
                    />
                    <Route
                      path="/Article"
                      render={() => <Article user={user} />}
                    />
                  </>
                );
              }}
            </UserContext.Consumer>
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
