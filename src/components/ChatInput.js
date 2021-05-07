import React, {useState} from 'react';
import "./styles/ChatInput.css";
// import {Button} from "@material-ui/core";
import db from "../firebase";
import {useStateValue} from "../StateProvider";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId}) => {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId) {
            // we have the channel id, so in this case, we are at /room/ sadsadasd so , we access the rooms collecions, go to the document, by channel id
            // which is from props, but the id which is show on the top of the screen in /room/sdasdasda, we go to document with the following id, and
            // then go to the another collection iside that document, containing all the massages inside.
            // in this case, we add the input value,w hat is in the state now, and the server timestamp to the message. That is all
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                // this is server timestamp not the local one
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user?.displayName,
                userImage: user.photoURL
            });
        }

    }


    return (
        <div className="chatInput">
            <form action="">
                {/* we are listening on change, and then something changes, we set input to value in the input,, and the the value of hwat is */}
                {/* shown inside, is the value, what is updated by setInput in the state*/}
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Enter the message in #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
};

export default ChatInput;
