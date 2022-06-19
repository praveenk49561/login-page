import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../../Component/Button";
import InputField from "../../Component/InputField";
import TodoItem from "../../Component/TodoItem";

const TodoPage = () => {
    const [content,setContent] = useState('');

    const [list, setList] = useState([]);

    const onClickCheck = (args) => {
        setList(list?.map((eTI) => {
            if (eTI?.id === args?.data?.id) {
                return {
                    ...eTI,
                    checked: args?.event?.target?.checked || false,
                };
            }
            return eTI;
        }))
    };

    const onClickDelete = (args) => {
        setList(list?.filter((eTI) => eTI.id !== args?.data?.id));
    }

    const onChangeNewTodo = (event) => {
        setContent(event?.target?.value);
    }

    const onClickAdd = () => {
        if (content) {
            const idGen = new Date().toUTCString();
            setList([...list, { id: `${list?.length + 1}_${idGen}`, content, checked: false }]);
            setContent('');
        }
    }

    return <div className="todo-page-main-container">
        <div className="todo-page-ops-container">
            <InputField
                classNameContainer="todo-page-name-field"
                className="todo-page-name-field-tag"
                type="text"
                placeHolder="What's new ? Now ?"
                name="newTodoContent"
                value={content}
                onChange={onChangeNewTodo}
            />
            <Button
                classNameContainer="todo-page-add-button-field"
                className="todo-page-add-button"
                onClick={onClickAdd}
            >
                Add <FontAwesomeIcon icon={faAdd} />
            </Button>
        </div>
        <div className="todo-page-todo-item-container">
            {list?.length === 0 && <div className="todo-page-empty">
                No Data !
            </div>}
            {list?.map((eTI) => <TodoItem key={eTI.id} id={eTI.id} name={eTI.id} content={eTI.content} data={eTI} checked={eTI.checked} onCheck={onClickCheck} onDelete={onClickDelete} />)}
        </div>
    </div>
};

export default TodoPage;