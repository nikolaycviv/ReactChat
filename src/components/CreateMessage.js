// not used atm
import React from 'react';

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>{this.props.message}</span>
    );
  }
}
