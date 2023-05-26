import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchQInfo from './SearchQinfo';

const SearchQ = () => {
    const toys = useLoaderData()
    console.log(toys)
    return (
        <div className='mb-20'>
            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5'>
                {
                    toys.map(toy => <SearchQInfo
                        key={toy._id}
                        toy={toy}
                    
                    ></SearchQInfo>)
                }
            </div>
        </div>
    );
};

export default SearchQ;