import { useToast } from '../../contexts/toast';
import './toast.css';
import { useEffect } from 'react';

export const Toast = () => {
    const { toastList, deleteToast } = useToast();

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length) deleteToast(toastList[0].id);
        }, 3000);
        return () => clearInterval(interval);
    }, [toastList]);

    return (toastList.length && <div className="toast-container">
        {toastList.map((toast) => {
            const { title, type, id } = toast;
            return (<div className="toast-container"><button className="toastcloseicon">
                X
            </button>
                <div>
                    <p className="notification-title"><b>{type}</b></p>
                    <p className="notification-message">{title}</p>
                </div>
            </div>)
        })}
    </div>)
}