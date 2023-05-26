import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';

const Search = () => {
    const [message, setMessage] = useState('');
    useTitle('PlayfulParadise | Search')
    return (
        <div>
            <NavBar></NavBar>
            <div className='lg:mx-52 lg:px-52 px-4 mt-16 '>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-[#9D1512] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>

                        <input onChange={e => setMessage(e.target.value)}
                            type="text"
                            id="message"
                            name="message" class="block w-full p-4 pl-10 text-sm text-[#9D1512] border border-[#EC903E] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-[#EC903E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Car" required />


                        <Link to={`${message}`} className=' text-black hover:text-white absolute right-2.5 bottom-2.5 bg-[#75E6DA] hover:bg-[#9D1512] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</Link>
                    </div>
                </form>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Search;