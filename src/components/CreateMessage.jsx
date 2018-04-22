import React from "react";

const CreateMessage = ({ message }) => <span>{message}</span>;
CreateMessage.propTypes = { message: React.PropTypes.string.isRequired };

export default CreateMessage;
