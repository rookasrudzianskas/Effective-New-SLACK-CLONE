import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import { useParams } from "react-router-dom";
import {InfoOutlined as InfoOutlinedIcon, StarBorderOutlined} from "@material-ui/icons";
import db from "../firebase";

const Chat = () => {

    // getting the room id parameter
    // this room id is the /: what we have wrote in the url in the app.js, it must be the same, because from there it gets that id
    const { roomId } = useParams();
// we need this to store the name and other details of the room by the following it in this state
    const [roomDetails, setRoomDetails] = useState(null);
    // console.log(roomDetails)

    // this is going to fire the times then the roomId changes, so this means, every time it runs, if checks, if have the room id
    // room id is that /roomms/ dasdasdsad the url and if we have it like that, so we do this code
    // it goes to the rooms in firebase , to the document with toom id and takes all the  data in it
    // we use the doc to access that id data, so in this case, we use the roomID which stores the roomID, and we take the snapshot
    // all  the data what is inside and do some stuff
    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (
                // we get all the data in that room id, which is just the name
                // we get all the data from that room id, in this case just the name
                /// and set it to the state
                setRoomDetails(snapshot.data())
            ))
        }
    }, [roomId])



    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#  🚀</strong>
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
