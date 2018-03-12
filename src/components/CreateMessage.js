import React from 'react';

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>{this.props.message}</span>
    );
  }
}

export default CreateMessage;
