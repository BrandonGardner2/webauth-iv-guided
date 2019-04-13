import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/login", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.error("LOGIN ERROR", err));
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
