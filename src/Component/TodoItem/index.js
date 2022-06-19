import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TodoItem = (props) => {
    const { classNameContainer, classNameCheckBox, classNameContent, classNameDelete, onCheck, onDelete, content, data, id, name,checked } = props;
    
    const onClick = (e) => {
        if (onDelete) onDelete({ event: e, data: data || {} });
    }

    const onChange = (e) => {
        if (onCheck) onCheck({ event: e, data: data || {}})
    }

    return <div className={`todo-item-main-container ${classNameContainer || ''}`}>
        <input className={`todo-item-item todo-item-checkbox ${classNameCheckBox || ''}`} type="checkbox" id={id} name={name} checked={checked} onChange={onChange}></input>
        <div className={`todo-item-item todo-item-content ${checked ? 'todo-item-content-line-through' : ''} ${classNameContent || ''}`}>{content}</div>
        <div className={`todo-item-item todo-item-delete-icon ${classNameDelete || ''}`} onClick={onClick}><FontAwesomeIcon icon={faTrash} /></div>
    </div>;
};

export default TodoItem;