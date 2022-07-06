import React from "react";

const Button = (props) => {
    const  { className, classNameContainer, children, onClick, disabled } = props;

    return <div className={`button-main-container ${classNameContainer || ''}`}>
        <button className={`button-tag ${className || ''}`} onClick={onClick ?? null} disabled={disabled}>
            {children}
        </button>
    </div>
};

export default Button;