import React, { Component } from "react";
import logo from "./Laissez-fit.svg";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Demo from "./Demo/Demo";
import Tracking from "./Tracking/Tracking";
import Articles from "./Articles/Articles";
import Article from "./Article/Article";
import Comment from "./Comment/Comment"
import { Route, Link, Switch, Redirect } from "react-router-dom";
import config from "./config.js";
import { UserContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      username: null,
      name: null,
    };
    this.logout = this.logout.bind(this);
  }
  static contextType = UserContext;
  logout() {
    this.setState({ user: {} });
  }
  login(userid) {
    document.getElementById("login-form").reset();
    this.setState({ user_id: userid });
  }
  setUsername(username) {
    this.setState({ username: username });
  }
  setUserName(name) {
    this.setState({ name: name });
  }

  submitLogin = (e) => {
    e.preventDefault();
    const un = e.target.username.value;
    const pw = e.target.password.value;
    const userToken = btoa(`${un}:${pw}`);
    fetch(`${config.API_URL}/api/user`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: `basic ${userToken}`,
      }
    })
      .then((res) => {
        if (!res.ok) {
          console.log('res from submitLogin',res)
          throw new Error({ error: { message: "login failed" }});
        }
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem(config.JWT_TOKEN, data.data.jwtToken);
        this.login(data.data.user.id);
        this.setUsername(data.data.user.username);
        this.setUserName(data.data.user.name);
        this.props.history.push("/Demo"))
      })
  };
  render() {
    const renderLoginOrLogout =
      this.state.user_id !== null ? (
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
      user_id: this.state.user_id,
      username: this.state.username,
      name: this.state.name,
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
              {({ user_id, username, name, logoutUser }) => {
                return (
                  <>
                    <Route
                      path="/Login"
                      render={() => (
                        <Login
                          submitLogin={this.submitLogin}
                          user_id={user_id}
                          username={username}
                          name={name}
                          logoutUser={logoutUser}
                        />
                      )}
                    />
                    <Route
                      path="/Demo"
                      render={() => <Demo user_id={user_id} />}
                    />
                    <Route
                      path="/Tracking"
                      render={() => <Tracking user_id={user_id} />}
                    />
                    <Route path="/Articles" render={() => <Articles />} />
                    <Route path="/Article" render={() => <Article />} />
                    <Route path="/Comment" render={() => <Comment user_id={user_id}/>} />
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
