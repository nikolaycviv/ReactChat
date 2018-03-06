import React from 'react';

export class ChatBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {
        this.props.messages.map((message) =>
          <li>{message}</li>
        )
      }
      </div>
    )
  }
}
