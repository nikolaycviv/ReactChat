import React, { Component } from 'react';
import { COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT, PRIVATE_MESSAGE, TYPING } from '../utils/Constants';
import ChatHeading from './ChatHeading';
import MessageInput from './MessageInput';
import Messages from './Messages';
import SideBar from './SideBar';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            activeChat: null
        };
    }

    componentDidMount() {
        const { socket } = this.props;
        this.initSocket(socket);
    }

    initSocket(socket) {
        socket.emit(COMMUNITY_CHAT, this.resetChat);
        socket.on(PRIVATE_MESSAGE, this.addChat);
        socket.on('connect', () => {
            socket.emit(COMMUNITY_CHAT, this.resetChat);
        });
    }

    sendOpenPrivateMessage = (reciever) => {
        const { socket, user } = this.props;
        socket.emit(PRIVATE_MESSAGE, { reciever: reciever, sender: user.name });
    }

    /**
       *  Reset the chat back to only the chat passed in.
       *  @param {string} chat chat name
       *  @returns {function}
       */
    resetChat = (chat) => {
        return this.addChat(chat, true);
    };

    /**
       *  Adds chat to the chat container, if reset is true removes all chats
       *  and sets that chat to the main chat.
       *  Sets the message and typing socket events for the chat.
       *  @param {string} chat the chat to be added.
       *  @param {boolean} reset if true will set the chat as the only chat.
       */
    addChat = (chat, reset = false) => {
        const { socket } = this.props,
            { chats } = this.state,
            newChats = reset ? [ chat ] : [ ...chats, chat ],
            messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`,
            typingEvent = `${TYPING}-${chat.id}`;

        this.setState({
            chats: newChats,
            activeChat: reset ? chat : this.state.activeChat
        });

        socket.on(typingEvent, this.updateTypingInChat(chat.id));
        socket.on(messageEvent, this.addMessageToChat(chat.id));
    };

    /**
       *  Returns a function that will add a message to the chat with the chatId passed in.
       *  @param {number} chatId the ID of the chat
       *  @returns {string} message
       */
    addMessageToChat = (chatId) => {
        return (message) => {
            const { chats } = this.state;
            let newChats = chats.map((chat) => {
                if(chat.id === chatId) {
                    chat.messages.push(message);
                }
                return chat;
            });

            this.setState({ chats: newChats });
        };
    };

    /**
       *  Updates the typing of chat with id passed in.
       *  @param  {number} chatId chat id
       *  @returns {void}
       */
    updateTypingInChat = (chatId) => {
        return ({ isTyping, user }) => {
            if(user !== this.props.user.name) {
                const { chats } = this.state;
                let newChats = chats.map((chat) => {
                    if(chat.id === chatId) {
                        if(isTyping && !chat.typingUsers.includes(user)) {
                            chat.typingUsers.push(user);
                        } else if(!isTyping && chat.typingUsers.includes(user)) {
                            chat.typingUsers = chat.typingUsers.filter((u) => {
                                return u !== user
                                ;
                            });
                        }
                    }
                    return chat;
                });
                this.setState({ chats: newChats });
            }
        };
    };

    /**
       *  Adds a message to the specified chat
       *  @param {number} chatId The id of the chat to be added to.
       *  @param {string} message The message to be added to the chat.
       *  @returns {void}
       */
    sendMessage = (chatId, message) => {
        const { socket } = this.props;
        socket.emit(MESSAGE_SENT, { chatId, message });
    };

    /**
       *  Sends typing status to server.
       *  @param {number} chatId  the id of the chat being typed in.
       *  @param {boolean} isTyping  If the user is still typing or not.
       */
    sendTyping = (chatId, isTyping) => {
        const { socket } = this.props;
        socket.emit(TYPING, { chatId, isTyping });
    };

    setActiveChat = (activeChat) => {
        this.setState({ activeChat });
    };

    render() {
        const { user, logout } = this.props,
            { chats, activeChat } = this.state;
        return (
            <div className="container">
                <SideBar
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={this.setActiveChat}
                    onSendPrivateMessage={this.sendOpenPrivateMessage}
                />
                <div className="chat-room-container">
                    {activeChat !== null ? (
                        <div className="chat-room">
                            <ChatHeading name={activeChat.name} />
                            <Messages
                                messages={activeChat.messages}
                                user={user}
                                typingUsers={activeChat.typingUsers}
                            />
                            <MessageInput
                                sendMessage={(message) => {
                                    this.sendMessage(activeChat.id, message);
                                }}
                                sendTyping={(isTyping) => {
                                    this.sendTyping(activeChat.id, isTyping);
                                }}
                            />
                        </div>
                    ) : (
                        <div className="chat-room choose">
                            <h3>Choose a chat!</h3>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
