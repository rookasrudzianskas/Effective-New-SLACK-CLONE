import React from 'react';
import "./styles/Message.css";

const Message = ({ message, timestamp, user, userImage}) => {
    // we put all the user data
    // ? add the try catch instantly and do not let the code to break in
    return (
        <div className="message">
            <img src={userImage} alt=""/>

            <div className="message__info">
                <h4>
                    {user} timestamp....
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
