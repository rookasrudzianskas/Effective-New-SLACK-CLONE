import React from 'react';
import "./styles/Message.css";

const Message = ({ message, timestamp, user, userImage}) => {
    // we put all the user data
    // ? add the try catch instantly and do not let the code to break in
    return (
        <div className="message">
            <img className="messageUserImage" src={userImage} alt=""/>

            <div className="message__info">
                <h4>
                    {/* we get back the timestamp from the server */}
                    {/* with JS we get the new Date*/}
                    {/* it just puts the timestamp in the beautiful format and not that long number*/}
                    {user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
