import React from 'react';
import "./styles/SidebarOption.css";
import { useHistory } from "react-router-dom";

const SidebarOption = ({Icon, title, addChannelOption, id}) => {
    // use history tracks where we go with and pushes to the history state all the data
    const history = useHistory();
    // so this one is going to fire if we click on the add channel and there is id of the channel
    // so basically we have the addCHanenelOPtion is on the last icon addChannel option
    // in the div we check if we have addCHannelOption so we do some stuff.
    // In this case select if we do not have the addChannelOption, we just fire select channel
    // if the channel has id, so we go to the /room/, and tka ethe id to the last url keyword
    const selectChannel = () => {
        if(id) {
            // next page as the redirect
            history.push(`/room/${id}`)
        } else {
            // next page, just title
            history.push('title')
        }
    };

    const addChannel = () => {

    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {/*rendering the icon*/}
            {/* if the icon exsists, we show the icon*/}
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* we well we check if the title exsists, so we also add the title, if not, so we show the hashtag*/}
            {/* and we are going to show the channel later on , now we shot the hashtag instead of icon and the title*/}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebarOption__channel">
                   <span className="sidebarOption__hash"># {title}</span>
                </h3>
            )}
        </div>
    );
};

export default SidebarOption;
