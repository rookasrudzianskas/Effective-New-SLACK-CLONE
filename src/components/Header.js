import React from 'react';
import "./styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
    return (
        <div className="header">
            <h1>I am the header</h1>

            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt="Rokas"
                    src=""
                />
            {/*    Avatar for logged in user   */}
                <AccessTimeIcon />

                {/*    Time Icon here   */}
            </div>

            <div className="header__search">
            {/*    Search Icon  */}
            {/*    input    */}
            </div>

            <div className="header__right">
            {/*     help icon   */}

            </div>
        </div>
    );
};

export default Header;
