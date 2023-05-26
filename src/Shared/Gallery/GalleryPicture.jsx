import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPicture = ({ toy }) => {
    //console.log(toy)
    const { _id, photo } = toy
    return (
        <div >
            <Link to={`/toys/${_id}`}>
                {/* <div className=' border-[#75E6DA] border-4 hover:bg-gray-200'>
                    <div className='flex justify-center  '>
                        <img className="p-8 h-72 rounded-t-lg" src={photo} alt="product image" />
                    </div>
                </div> */}

                <div  className="relative bg-white border border-[#75E6DA] rounded-lg shadow-lg dark:bg-[#75E6DA] dark:border-[#75E6DA]">
                    <div className='flex justify-center' >
                        <img className="p-8 h-72 rounded-t-lg " src={photo} alt="Image" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-[#05445E]/30 border-2 border-neutral-700 rounded-lg">
                        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                            <p>View</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GalleryPicture;