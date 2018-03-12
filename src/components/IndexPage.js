import React from 'react';
import SetName from './SetName';
import CreateMessage from './CreateMessage';
import ChatBoard from './ChatBoard';
import Header from './Header';
import Footer from './Footer';
// import PropTypes from 'prop-types';

export class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "", name: "", message: "" };
        this.messages = [];
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.refs.name.value) {
            let date = new Date();
            date.toLocaleDateString();
            let newMessage = "";
            newMessage = date + " " + this.refs.name.value + " : " + this.refs.name.value;
            this.messages.push(newMessage);
            console.log(newMessage);
            this.setState({ greeting: "Welcome to the chat", name: this.refs.name.value, message: this.refs.name.value });
        } else {
            this.setState({ greeting: "Enter your name to join the chat" });
        }
    }

    render() {
        return (
            <div>
              <header>
                <Header/>
              </header>
              <div>
                <h1 className="page-header">Index Page</h1>
                <p>Enter name:</p>
                <input type="text" ref="name" />
                <p>Enter message:</p>
                <input type="text" ref="message" />
                <button onClick={this.handleClick}>Send</button>
                <p>{this.state.greeting}</p>
                <ChatBoard messages={this.messages}/>
              </div>
              <footer>
                <Footer projectName="React Chat" year="2018" />
              </footer>
                <ChatBoard messages={this.messages} />
            </div>
        );
    }
}
