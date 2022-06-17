import React from "react";

const CheckboxField = (props) => {
    const { checked, label, onChange, className, classNameContainer, classNameLabel } = props;
    return <div className={`checkbox-field-main-container ${classNameContainer || ''}`}>
        <input className={`checkox-field-tag ${className || ''}`} type="checkbox" checked={checked} onChange={onChange} id={`${label}-id`}></input>
        <label className={`checkbox-field-lable ${classNameLabel || ''}`} htmlFor={`${label}-id`}>{label}</label>
    </div>;
};

export default CheckboxField;