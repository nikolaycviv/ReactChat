import React from "react";
import PropTypes from 'prop-types';

const CreateMessage = ({ message }) => <span>{message}</span>;
CreateMessage.propTypes = { message: PropTypes.string.isRequired };

export default CreateMessage;
