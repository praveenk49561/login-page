import React from "react";

const InputField = (props) => {
    const { prefix, suffix, onChange, value, placeHolder, type, classNameContainer, classNamePrefix, classNameSuffix, className } = props;
    return <div className={`input-field-main-container ${classNameContainer || ''}`}>
        {prefix && <div className={`input-field-prefix ${classNamePrefix || ''}`}>{prefix}</div>}
        <input className={`input-field-tag ${className}`} type={type} placeholder={placeHolder} onChange={onChange} value={value}></input>
        {suffix && <div className={`input-field-suffix ${classNameSuffix || ''}`}>{suffix}</div>}
    </div>
}

export default InputField;