import React from "react";
import ReactDOM from 'react-dom/client';
import { getContainer, NotifyBar } from "./utils";

const container = getContainer();

const Notification = (content, header, closable, time) => {
    const subContainer = document.createElement('div');
    container.appendChild(subContainer);

    const onClose = () => {
        console.log(subContainer)
        subContainer.remove();
    }
    
    const root = ReactDOM.createRoot(subContainer);
    root.render(<NotifyBar header={header} closable={closable} time={time} onClose={onClose}>{content}</NotifyBar>);
};

export default Notification;