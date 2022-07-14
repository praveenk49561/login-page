import { Toast } from "react-bootstrap";

export const createContainer = () => {
    const id = "toast-container-ext-id";
    const clsName = "toast-container-ext-cls";
    let element = document.getElementById(id);

    if (element) {
        return element;
    }

    element = document.createElement("div");
    element.setAttribute("id", id);
    element.setAttribute("class", clsName);
    document.body.appendChild(element);
    return element;
}

export const ToastExt = (props) => {
    const { show, delay, autohide, onClose, header, children } = props;

    const onCloseHandler = () => {
        onClose();
    }

    return (
        <Toast onClose={onCloseHandler} show={show} delay={delay} autohide={autohide}>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">{header}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    );
};