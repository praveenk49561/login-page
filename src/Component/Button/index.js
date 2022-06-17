import React from "react";

const Button = (props) => {
    const  { className, classNameContainer, children } = props

    return <div className={`button-main-container ${classNameContainer}`}>
        <button className={`button-tag ${className}`}>
            {children}
        </button>
    </div>
};

export default Button;