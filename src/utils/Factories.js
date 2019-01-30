const uuidv4 = require('uuid/v4');

/**
*  Creates a user.
*  @param {string} name user's name
*  @param {null} socketId user's socket ID
*  @returns {object}
*/
const createUser = ({ name = '', socketId = null } = {}) => {
    return {
        id: uuidv4(),
        name: name,
        socketId: socketId
    };
};

/**
*  Creates a messages object.
*  @param {string} message actual string message
*  @param {string} sender sender of the message
*  @returns {object}
*/
const createMessage = ({ message = '', sender = '' } = {}) => {
    return {
        id: uuidv4(),
        time: getTime(new Date(Date.now())),
        message: message,
        sender: sender
    };
};

/**
*  Creates a Chat object
*  @param {array} messages chat messages || empty
*  @param {string} name hardcoded = 'Community'
*  @param {array} users users in the chat || empty
*  @returns {object}
*/
const createChat = ({ messages = [], name = 'Community', users = [] } = {}) => {
    return {
        id: uuidv4(),
        name: name,
        messages: messages,
        users: users,
        typingUsers: []
    };
};

/**
*  Transforms date to string value
*  @param {Date} date input date to be stringified
*  @returns {string} which is represented in 24hr time i.e. '11:30', '19:30'
*/
const getTime = (date) => {
    return `${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`;
};

module.exports = {
    createChat,
    createMessage,
    createUser
};
