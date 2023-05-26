import React from 'react';
import ShopByCategory from '../HomePageComponents/ShopByCategory/ShopByCategory';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Slider from '../Shared/Slider/Slider';
import RecentlyAdded from '../Shared/RecentlyAdded/RecentlyAdded';
import Gallery from '../Shared/Gallery/Gallery';
import Brands from '../Shared/Brands/Brands';
import AskedQ from '../Shared/AskedQ/AskedQ';
import Footer from '../Shared/Footer/Footer';
import useTitle from '../Hook/UseTitle';


const HomeLayouts = () => {

    useTitle('PlayfulParadise | Home')
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
            
            <Brands></Brands>
            <AskedQ></AskedQ>
            <RecentlyAdded></RecentlyAdded>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;