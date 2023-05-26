import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';
import RecentlyAdded from '../../Shared/RecentlyAdded/RecentlyAdded';

const ToysDetails = () => {
    useTitle('PlayfulParadise | Toys Details')
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <RecentlyAdded></RecentlyAdded>
            <Footer></Footer>
        </div>
    );
};

export default ToysDetails;