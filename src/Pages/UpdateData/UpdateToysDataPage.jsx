import React from 'react';
import NavBar from '../../Shared/NavBar';
import { Outlet } from 'react-router-dom';

const UpdateToysDataPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default UpdateToysDataPage;