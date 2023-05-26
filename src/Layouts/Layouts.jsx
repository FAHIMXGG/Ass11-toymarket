import React from 'react';
import { Outlet} from 'react-router-dom';
import NavBar from '../Shared/NavBar';



const Layouts = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;