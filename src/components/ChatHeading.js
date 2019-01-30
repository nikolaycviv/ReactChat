import React from 'react';
import FAUserPlus from 'react-icons/lib/fa/user-plus';
import FAVideo from 'react-icons/lib/fa/video-camera';
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control';

/**
 *  Displays the user name and the number of users
 *  @param {string} name user name
 *  @param {number} numberOfUsers number of users
 *  @returns {component}
 */
export default function({ name, numberOfUsers }) {
    return (
        <div className="chat-header">
            <div className="user-info">
                <div className="user-name">{name}</div>
                <div className="status">
                    <div className="indicator" />
                    <span>{numberOfUsers ? numberOfUsers : null}</span>
                </div>
            </div>
            <div className="options">
                <FAVideo />
                <FAUserPlus />
                <MdEllipsisMenu />
            </div>
        </div>
    );
}
