import React from 'react';
import { Link } from 'react-router-dom';

const UserToys = ({ toy, handleDelete }) => {

    const { _id, photo, ProductName, sellerEmail, sellerName, subCategory, price, rating, quantity, description } = toy
    return (
        <div className='mb-5 md:mx-32'>
            <div className='bg-[#D4F1F4] py-5 px-5 rounded-xl'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <img className='w-40 rounded-lg' src={photo} alt="" />
                        <h1 className='font-medium'>{ProductName}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5'>
                        <Link to={`/updateToys/${_id}`}
                        ><button className='bg-[#75E6DA] font-semibold px-3 py-2 rounded-lg '>Update</button></Link>
                        <Link><button onClick={() => handleDelete(_id)} className='bg-[#75E6DA] font-semibold px-3 py-2 rounded-lg '>Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserToys;