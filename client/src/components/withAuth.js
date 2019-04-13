import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(reqConfig => {
  const token = localStorage.getItem("token");
  reqConfig.headers.authorization = token;
  return reqConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h2>You are not logged in</h2>;

      return <div>{token ? <Component {...this.props} /> : notLoggedIn}</div>;
    }
  };
}
