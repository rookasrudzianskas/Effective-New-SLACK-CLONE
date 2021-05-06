import React from 'react';
import "./styles/SidebarOption.css";

const SidebarOption = ({Icon, title}) => {
    return (
        <div className="sidebarOption">
            {/*rendering the icon*/}
            {/* if the icon exsists, we show the icon*/}
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* we well we check if the title exsists, so we also add the title, if not, so we show the hashtag*/}
            {/* and we are going to show the channel later on , now we shot the hashtag instead of icon and the title*/}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3>
                    # {title}
                </h3>
            )}
        </div>
    );
};

export default SidebarOption;
