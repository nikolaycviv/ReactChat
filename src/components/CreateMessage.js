import React, { Component } from "react";

export default class CreateMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span>{this.props.message}</span>;
  }
}
