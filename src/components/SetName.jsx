import React from "react";

const SetName = ({ userName }) => <span>{userName}</span>;
SetName.propTypes = { userName: React.PropTypes.string.isRequired };

export default SetName;
