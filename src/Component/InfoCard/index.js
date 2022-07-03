import React from "react";

const InfoCard = (props) => {
    const { name, subNameOne, subNameTwo, className, containerClassName, subNameOneClasName, subNameTwoClassName } = props;
    return <div className={`info-card-container ${containerClassName}`}>
        <div className={`info-card-name ${className}`}>{name}</div>
        <div className={`info-card-sub-name-one ${subNameOneClasName}`}>{subNameOne}</div>
        <div className={`info-card-sub-name-two ${subNameTwoClassName}`}>{subNameTwo}</div>
    </div>;
};

export default InfoCard;