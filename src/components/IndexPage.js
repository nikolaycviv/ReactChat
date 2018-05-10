import React, { Component } from "react";
import SetName from "./SetName";
import SetMessageDate from "./SetMessageDate";
import CreateMessage from "./CreateMessage";
import LoginForm from "./LoginForm";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../../src/utils/Constants";

const socketUrl = "http://10.131.136.228:3231"; // this IP should be changed according to whatever appears to be yours
export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      greeting: "",
      name: "",
      message: "",
      socket: null,
      user: null
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("Connected!");
    });
    this.setState({ socket });
  };

  setUser = (user) => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  logout = (user) => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  handleClick() {
    if (this.refs.name.value) {
      let date = new Date();
      this.setState({
        greeting: "Welcome to the chat",
        name: this.refs.name.value,
        message: this.refs.message.value,
        date: date.toLocaleDateString()
      });
    } else {
      this.setState({ greeting: "Enter your name to join the chat" });
    }
  }

  render() {
    const { socket } = this.state;
    return (
      <div>
        <h1 className="page-header">Index Page</h1>
        <LoginForm socket={socket} setUser={this.setUser} />
        <p>Enter name:</p>
        <input type="text" ref="name" />
        <p>Enter message:</p>
        <input type="text" ref="message" />
        <button onClick={this.handleClick}>Send</button>
        <p>{this.state.greeting}</p>
        <span>
          <SetMessageDate date={this.state.date} />{" "}
          <SetName userName={this.state.name} /> :{" "}
          <CreateMessage message={this.state.message} />
        </span>
      </div>
    );
  }
}
