import React, { Component } from "react";
import logo from "./Laissezfit.svg";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Demo from "./Demo/Demo";
import Articles from "./Articles/Articles"
import Article from "./Article/Article"
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
class App extends Component {
  submitLogin = e => {
    e.preventDefault();
    console.log(e)
  };
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="links">
          <Link to="/Login">login</Link>
          <Link to="/Signup">signup</Link>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Laissez.fit</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Landing" />
        </Route>
        <Route path="/Landing" render={() => <Landing />} />
        <Route path="/Login" render={() => <Login submitLogin={this.submitLogin} />} />
        <Route path="/Signup" render={() => <Signup />} />
        <Route path="/Demo" render={() => <Demo />} />
        <Route path="/Articles" render={() => <Articles />} />
        <Route path="/Article" render={() => <Article />} />
      </Switch>
    </div>
  )}
}

export default App;
