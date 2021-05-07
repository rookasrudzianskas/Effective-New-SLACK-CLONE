import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import { useParams } from "react-router-dom";
import {InfoOutlined as InfoOutlinedIcon, StarBorderOutlined} from "@material-ui/icons";
import db from "../firebase";
import Message from "./Message";

const Chat = () => {

    // getting the room id parameter
    // this room id is the /: what we have wrote in the url in the app.js, it must be the same, because from there it gets that id
    const { roomId } = useParams();
// we need this to store the name and other details of the room by the following it in this state
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    console.log(roomMessages)

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
            // for the second time go to the rooms collection, take the document with the required id, and go to the collection messages
            // inside that room with the following id, and orderBy by the timestamp, soo it means the time it was sent
            // go to the messages collection and set the messages state to all what it is now in ti, so it takes the snapshot
            // meansing all the data inside and iterates per each doc, to get each data info separately and store in the messages state
            // the user, message, name, info and s o on
            // and stores in the messages store
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
        }
    }, [roomId])



    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* ? if there is no details, so do not freak out*/}
                        <strong>#{roomDetails?.name}  🚀</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
            {/*    <Message />*/}
            {/* this goes per all room messages and takes the all the props, then passes it to the Message component*/}
            {/*     as the props all the data */}
                {roomMessages.map(({ message, timestamp, user, userImage}) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chat;
