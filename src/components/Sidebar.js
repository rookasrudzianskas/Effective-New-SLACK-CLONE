import React from 'react';
import "./styles/Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

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
        </div>
    );
};

export default Sidebar;
