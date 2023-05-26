import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner, Toast } from 'flowbite-react';
import { AuthContext } from '../provider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Default status example" />
        </div>
    }

    // const notify = () => {
    //     <Toast>
    //         <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
    //             {/* <HiFire className="h-5 w-5" /> */}
    //         </div>
    //         <div className="ml-3 text-sm font-normal">
    //             Set yourself free.
    //         </div>
    //         <Toast.Toggle />
    //     </Toast>
    // }


    if (user) {

        return children;
    }
    // else {
    //     notify()
    // }


    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;