import React, { useEffect, useState } from 'react';
import RecentlyAddedInfo from './RecentlyAddedInfo';

const RecentlyAdded = () => {

    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('https://ass-11-toys-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                const reversedToys = [...data].reverse();
                setToys(reversedToys);
            })
            .catch(error => console.error(error))
    }, [])
    console.log(toys)

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className='mb-20'>
            <div className='text-center font-semibold text-2xl'>
                <h1 className='mb-3 font-mono'>Recently Added Products</h1>
                <div className='flex justify-center'>
                <hr className='border-1 w-3/12 border-cyan-400' />
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5'>
                {
                    toys.slice(0, 8).map( toy => <RecentlyAddedInfo
                        key={toy._id}
                        toy={toy}
                    
                    ></RecentlyAddedInfo>)
                }
            </div>
        </div>
    );
};

export default RecentlyAdded;