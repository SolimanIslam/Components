import { useEffect } from 'react';
import PortalReactDOM from 'react-dom'

function Modal({ children, actionBar, onClose }) {

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
    return ()=>{
        document.body.classList.remove('overflow-hidden')
    }
    },[]);

    return PortalReactDOM.createPortal(
        <div >
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-300 opacity-80"
        ></div>

        <div
            className="fixed inset-40 bg-white p-4 rounded"
        >
            <div
                className="flex flex-col justify-between h-full overflow-auto"
            >
                {children}
                <div
                    className="flex justify-end pt-5"
                >
                    {actionBar}
                </div>
            </div>
        </div>
    </div>, 
    document.querySelector('.modal-container'));
    
    
}

export default Modal;