import React from "react";

const InputField = (props) => {
    const { prefix, suffix, onChange, value, placeHolder, name, type, classNameContainer, classNamePrefix, classNameSuffix, className } = props;
    const tagClassNameExt = prefix && suffix ? 'tag-prefix-suffix' : (prefix ? 'tag-prefix' : (suffix ? 'tag-suffix' : ''));
    return <div className={`input-field-main-container ${classNameContainer || ''}`}>
        {prefix && <div className={`input-field-prefix ${classNamePrefix || ''}`}>{prefix}</div>}
        <input className={`input-field-tag ${tagClassNameExt} ${className}`} name={name || ''} type={type} placeholder={placeHolder} onChange={onChange} value={value}></input>
        {suffix && <div className={`input-field-suffix ${classNameSuffix || ''}`}>{suffix}</div>}
    </div>
}

export default InputField;