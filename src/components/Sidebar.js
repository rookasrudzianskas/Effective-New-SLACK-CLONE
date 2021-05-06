import React from 'react';
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

const Sidebar = () => {
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
        </div>
    );
};

export default Sidebar;
