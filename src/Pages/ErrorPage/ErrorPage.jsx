import React from 'react';
import { useNavigate, useRouteError } from "react-router-dom";
import useTitle from '../../Hook/UseTitle';

export default function ErrorPage() {
    useTitle('PlayfulParadise | Error')
    const error = useRouteError();
    //console.error(error);
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div id="error-page" className='text-center '>
            <center><img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" /></center>
            <h1 className='font-bold mb-2 text-3xl'>404</h1>
            <h1 className='font-bold mb-2 text-3xl'>Oops!Oops!</h1>
            
            
            <p>
        <i>Page {error.statusText || error.message}</i>
      </p>

            <div className='mx-auto text-center mt-10'>
                <button className=' bg-slate-300 p-2 rounded' onClick={handleGoBack}>GoBack</button>
            </div>
        </div>

    );
}