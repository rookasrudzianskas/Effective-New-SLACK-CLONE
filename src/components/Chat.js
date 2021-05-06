import React from 'react';
import "./styles/Chat.css";
import { useParams } from "react-router-dom";

const Chat = () => {

    // getting the room id parameter
    // this room id is the /: what we have wrote in the url in the app.js, it must be the same, because from there it gets that id
    const { roomId } = useParams();

    return (
        <div className="chat">
                <h1>This is chat {roomId} room</h1>
        </div>
    );
};

export default Chat;
