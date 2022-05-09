import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ErrorMessage = (msg) => {
    toast.error(msg, { position: 'toast.POSITION.TOP_RIGHT' });
}