import React, { Component } from "react";
import { havacLogo } from "../../assets/index";
import "./Login.css";

export default class Login extends Component {
  state = {
    userId: "",
    password: "",
    errors: {},
    isLoading: false,
  };

  OnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { userId, password } = this.state;
    console.log("aa", this.state);
    return (
      <div className="login-container">
        <img alt="login" src={havacLogo} id="forgot-image" />
        <div className="login-box">
          <input
            className="input-fields"
            maxLength={"20"}
            required
            placeholder={"User ID"}
            name={"userId"}
            value={userId}
            onChange={this.OnChange}
            id={"login-userId"}
          />
          <input
            className="input-fields"
            maxLength={"20"}
            required
            placeholder={"Password"}
            name={"password"}
            value={password}
            onChange={this.OnChange}
            type="password"
            id={"login-password"}
          />
          <div type="button" className="login-button">
            Login
          </div>
          <div type="button" className="login-forget-password">
            Forgot password?
          </div>
        </div>
      </div>
    );
  }
}
