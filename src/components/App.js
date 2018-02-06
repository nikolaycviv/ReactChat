import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { setName: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ setName: true });
        // this.setState(prevState => ({
        //     setName: !prevState.setName
        // }));
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

export default App;
