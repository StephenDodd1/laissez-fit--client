import React from "react";
import logo from "./Laissezfit.svg";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='links'>
          <Link to="/login">Login</Link>
          <Link to="/signup" >Signup</Link>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Laissez.fit</h1>
      </header>
        <Landing />
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <Signup />} />
      
    </div>
  );
}

export default App;
