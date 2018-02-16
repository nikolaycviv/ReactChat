import React from 'react';

export default class SetName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>{this.props.userName}</span>
    );
  }
}
