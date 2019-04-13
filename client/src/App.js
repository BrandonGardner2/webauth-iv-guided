import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={Users} />
          </Switch>
        </main>
      </div>
    );
  }
}

function Home(props) {
  return <h1>Home component</h1>;
}

export default App;
