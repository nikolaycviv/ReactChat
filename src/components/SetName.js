import React from 'react';

class SetName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>{this.props.userName}</span>
    );
  }
}

export default SetName;
