import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const InfoCard = (props) => {
    const { name, year, members } = props;
    return <div className="info-card">
        <div className="info-card-name">{name}</div>
        <div className="info-card-year">{year}</div>
        <div className="info-card-members"><div className="info-card-members-count">{members}</div><div className="info-card-members-icon"><FontAwesomeIcon icon={faUserFriends} /></div></div>
    </div>;
};

export default InfoCard;