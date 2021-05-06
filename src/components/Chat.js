import React from 'react';
import "./styles/Chat.css";
import { useParams } from "react-router-dom";
import {InfoOutlined as InfoOutlinedIcon, StarBorderOutlined} from "@material-ui/icons";

const Chat = () => {

    // getting the room id parameter
    // this room id is the /: what we have wrote in the url in the app.js, it must be the same, because from there it gets that id
    const { roomId } = useParams();

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># General room 🚀</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chat;
