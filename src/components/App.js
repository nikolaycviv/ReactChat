import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: "" };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.refs.name.value) {
            this.setState({ msg: "Welcome to the chat" });
        } else {
            this.setState({ msg: "Enter your name to join the chat" });
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref="name" />
                <button onClick={this.handleClick}>Enter</button>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

export default App;
