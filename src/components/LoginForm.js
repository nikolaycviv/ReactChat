import React, { Component } from "react";
import { VERIFY_USER } from "../../src/utils/Constants";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: ""
    };
  }

  setUser = ({ user, isUser }) => {
    if (isUser) {
      this.setError("Username is taken!");
    } else {
      this.props.setUser(user);
    }
  };

  handleSumbit = (e) => {
    e.preventDefault();
    const { socket } = this.props,
      { nickname } = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser);
  };

  handleChange = (e) => {
    this.setState({ nickname: e.target.value });
  };

  setError = (error) => {
    this.setState({ error });
  };

  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSumbit} className="login-form">
          <label htmlFor="nickname">
            <h2>Got a nickname?</h2>
          </label>
          <input
            type="text"
            ref={(input) => {
              this.textInput = input;
            }}
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"My cool Username"}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}
