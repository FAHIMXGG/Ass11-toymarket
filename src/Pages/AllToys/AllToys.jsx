import React, { useEffect, useState } from 'react';
import AllToysInfo from './AllToysInfo/AllToysInfo';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';
import { Dropdown } from 'flowbite-react';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);
    useTitle('PlayfulParadise | All Toys')


    useEffect(() => {
        fetch('https://ass-11-toys-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])

    //console.log(toys)
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('');

    const sortByPrice = () => {
        const sortedToys = [...toys].sort((a, b) => a.price - b.price);
        setToys(sortedToys);
    };
    const sortByPriceH = () => {
        const sortedToys = [...toys].sort((a, b) => b.price - a.price);
        setToys(sortedToys);
    };


    //console.log(short)
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 100);
    };
    let button;
    if (visible === 20) {
        button = <button style={{ background: ' linear-gradient(90deg, #75E6DA 0%, #1a6384 100%)' }} className='font-semibold mt-5 mb-16 text-center mx-auto flex justify-center px-5 py-2 rounded text-white' onClick={showMoreItems}>Show More</button>
    }

    return (
        <div>
            <NavBar></NavBar>

            <div className='lg:mx-52 lg:px-52 px-4 mt-16 mb-10'>
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


                        <Link to={`/search/${message}`} className=' text-black hover:text-white absolute right-2.5 bottom-2.5 bg-[#75E6DA] hover:bg-[#9D1512] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</Link>
                    </div>
                </form>
            </div>

            <div className='px-5 lg:px-16 flex justify-end gap-2'>
                <div className='flex justify-end '>

                    

                    <Dropdown 
                        label="By Price"
                        dismissOnClick={false}
                    >
                        <Dropdown.Item>
                        <button className=' ' onClick={sortByPrice}>Low To High</button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <button className='' onClick={sortByPriceH}>High To Low</button>
                        </Dropdown.Item>
                        
                    </Dropdown>
                    
                    
                </div>
                <div className='flex justify-end md:pr-12 border-[#7E90FE]'>
                    <select className='rounded' onChange={(e) => setSearch(e.target.value)}>
                        <option value="">All</option>
                        <option value="SportsCar">Sports Car</option>
                        <option value="RegularCar">Regular Car</option>
                        <option value="Truck">Truck</option>


                    </select>
                </div>

            </div>



            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5 mb-20'>
                {
                    toys.slice(0, visible).filter((item) => {
                        return search === '' ? item : item.subCategory.includes(search)
                    }).map(toy => <AllToysInfo
                        key={toy._id}
                        toy={toy}

                    ></AllToysInfo>)
                }
            </div>
            {button}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AllToys;