import React, { Component } from "react";
import SetName from "./SetName";
import CreateMessage from "./CreateMessage";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "", name: "", message: "" };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.refs.name.value) {
      this.setState({
        greeting: "Welcome to the chat",
        name: this.refs.name.value,
        message: this.refs.message.value
      });
    } else {
      this.setState({ greeting: "Enter your name to join the chat" });
    }
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Index Page</h1>
        <p>Enter name:</p>
        <input type="text" ref="name" />
        <p>Enter message:</p>
        <input type="text" ref="message" />
        <button onClick={this.handleClick}>Send</button>
        <p>{this.state.greeting}</p>
        <span>
          <SetName userName={this.state.name} /> :{" "}
          <CreateMessage message={this.state.message} />
        </span>
      </div>
    );
  }
}
