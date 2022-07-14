import ReactDOM from 'react-dom/client';
import { createContainer, ToastExt } from './Utils';

const mainContainer = createContainer();

const Toastify = (header="", content="", autohide=true, delay=1000) => {
    const subContainer = document.createElement('div');
    mainContainer.appendChild(subContainer);

    const onClose = () => {
        subContainer.remove();
    }
    
    const root = ReactDOM.createRoot(subContainer);
    root.render(<ToastExt show={true} delay={delay} autohide={autohide} onClose={onClose} header={header}>{content}</ToastExt>);
}

export default Toastify;