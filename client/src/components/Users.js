import React, { Component } from "react";
import axios from "axios";

import withAuth from "./withAuth";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => {
            return <li key={user.id}>user.username</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(Users);
