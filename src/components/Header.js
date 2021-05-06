import React from 'react';
import "./styles/Header.css";


const Header = () => {
    return (
        <div className="header">
            <h1>I am the header</h1>

            <div className="header__left">
            {/*    Avatarr for logged in user   */}
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
