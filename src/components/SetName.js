import React, { Component } from "react";

export default class SetName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span>{this.props.userName}</span>;
  }
}
