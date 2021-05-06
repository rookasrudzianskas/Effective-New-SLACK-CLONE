import React, {useEffect, useState} from 'react';
import "./styles/Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import {
    InsertComment as InsertCommentIcon,
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
    BookmarkBorder as BookmarkBorderIcon,
    PeopleAlt as PeopleAltIcon,
    Apps as AppsIcon,
    FileCopy as FileCopyIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    Add as AddIcon,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import db from "../firebase";
import '@firebase/firestore';
import 'firebase/firestore';

const Sidebar = () => {
    // we are going to store all the channels here
    const [channels, setChannels] = useState([]);
    console.log(channels);

    useEffect(() => {
       // run this code then sidebar component loads
        // this goes to the collection rooms and takes all the documents inside which are currently in it
        // and now it has all the access to the all rooms and so on, everything what is inside
        db.collection("rooms").onSnapshot((snapshot) => (
            // we go per each doc inside, and take all the data, and store it as the array in the channels state
            // but this saves the data as the objects inside the array, so basically returns each object, and the channels state is the
            // array of the objects, with id which is auto id, and the name key, in which is stored the channel name, which
            // is accessed by document.data and from that data, we just get the name property
            // and we get an array of objects, each one has the id and the name propery
            setChannels(snapshot.docs.map((doc) => ({
                 id: doc.id,
                 name: doc.data().name,
                })))
        ));
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>Brainlyemails & CONNEXIOUS Startups</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Rokas Rudzianskas
                </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption  Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

        {/*    COnnect db and list all the channels*/}
        {/*     SidebarOption component */}

        {/*    {channels.map(channel => (*/}
        {/*        <SidebarOption title={channel.name} id={channel.id} />*/}
        {/*    ))}*/}
        </div>
    );
};

export default Sidebar;
