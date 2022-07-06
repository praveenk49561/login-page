import { useEffect, useRef } from "react";

export const getContainer = () => {
    const id = "notification-container-001";
    let element = document.getElementById(id);

    if (element) {
        return element;
    }

    element = document.createElement("div");
    element.setAttribute("id", id);
    element.className = "notification-container-002";
    document.body.appendChild(element);
    return element;
};

export const NotifyBar = ({ children, header, closable = true, onClose, time }) => {

    const eleRef = useRef(null);
    let timerId = '';

    const Close = () => {
        if (eleRef) {
            eleRef.current.remove();
            onClose();
            clearTimeout(timerId);
        }
    };

    useEffect(() => {
        if (time !== undefined && time !== null) {
            setTimeout(() => {
                Close();
            }, time || 0);
        }
    }, []);

    return <div ref={eleRef} className={`notify-bar-main-container`}>
        {header && <div className={`notify-bar-header`}>{header}</div>}
        {children && <div className={`notify-bar-content`}>{children}</div>}
        {closable && <div className={`notify-bar-close`} itemType="button" onClick={Close}>X</div>}
    </div>
};