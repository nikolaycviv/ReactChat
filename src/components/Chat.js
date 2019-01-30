import React, { Component } from 'react';
import io from 'socket.io-client';
import { LOGOUT, USER_CONNECTED } from '../../src/utils/Constants';
import ChatContainer from './ChatContainer';
import LoginForm from './LoginForm';

const socketUrl = 'http://localhost:3231';
export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            greeting: '',
            name: '',
            message: '',
            socket: null,
            user: null
        };
    }

    componentWillMount() {
        this.initSocket();
    }

    /**
     *  Connect to and initializes the socket.
     */
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log('Connected!');
        });
        this.setState({ socket });
    };

    /**
     *  Sets the user property in state
     *  @param {object} user ''
     */
    setUser = (user) => {
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({ user });
    };

    /**
     *  Sets the user property in state to null.
     * @param {object} user ''
     */
    logout = (user) => {
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({ user: null });
    };

    render() {
        const { socket, user } = this.state;
        return (
            <div className="container">
                {!user ? (
                    <LoginForm socket={socket} setUser={this.setUser} />
                ) : (
                    <ChatContainer socket={socket} user={user} logout={this.logout} />
                )}
            </div>
        );
    }
}
