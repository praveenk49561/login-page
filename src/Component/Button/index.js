import React from "react";

const Button = (props) => {
    const  { className, classNameContainer, children, onClick } = props;

    return <div className={`button-main-container ${classNameContainer || ''}`}>
        <button className={`button-tag ${className || ''}`} onClick={onClick ?? null}>
            {children}
        </button>
    </div>
};

export default Button;