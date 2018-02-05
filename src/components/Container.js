import React from 'react';
import PropTypes from 'prop-types';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { setName: false };
    }

    handleClick() {
        this.setState({ setName: true });
    }

    render() {
        var msg = '';
        if (this.state.setName) {
            msg = "Welcome to the chat"
        } else {
            msg = "Enter your name to join the chat"
        }
        return (
            <div>
                <input type="text" />
                <button onClick={this.handleClick}>Enter</button>
                <p>{msg}</p>
            </div>
        );
    }
}

export default Container;
