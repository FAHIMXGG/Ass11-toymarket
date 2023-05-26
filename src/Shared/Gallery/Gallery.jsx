import React, { useEffect, useState } from 'react';
import GalleryPicture from './GalleryPicture';

const Gallery = () => {

    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('https://ass-11-toys-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-center" className='mb-28'>
            <div className='text-center font-semibold text-2xl '>
                <h1 className='mb-3 font-mono'>Gallery</h1>
                <div className='flex justify-center'>
                <hr className='border-1 w-36 border-cyan-400' />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-1 lg:px-64 mt-6 p-5'>
            {
                toys.slice(0, 6).map( toy => <GalleryPicture
                    key={toy._id}
                    toy={toy}

                ></GalleryPicture>)
            }
            </div>
            
        </div>
    );
};

export default Gallery;