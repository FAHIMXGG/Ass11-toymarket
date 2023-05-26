import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysFullData = () => {

    const toysFullData = useLoaderData()
    console.log(toysFullData)
    const { _id, photo, ProductName, email, sellerName, subCategory, price, rating, quantity, description } = toysFullData

    return (
        <div className='mb-20'>
            <div className='flex justify-center'>
                <img className='md:w-3/12' src={photo} alt="" />
            </div>
            <div className='md:mx-48'>
                <div className='bg-[#D4F1F4] px-5 md:px-72 rounded-lg'>
                    <div className='flex justify-center text-[#05445E] font-bold text-2xl mb-10 '>
                        <h1 className='mt-10'>
                            {ProductName}
                        </h1>
                    </div>
                    <div className='flex flex-col font-semibold text-[#189AB4] mb-5'>
                        <h1>
                            Seller Name: {sellerName}
                        </h1>
                        <h1>
                            Seller Email: {email}
                        </h1>
                    </div>
                    <div className='flex justify-between font-semibold'>
                        <h1>
                         Sub Category: {subCategory}
                        </h1>
                        <h1>
                            Rating: {rating}
                        </h1>
                    </div>
                    <div className='flex justify-between font-semibold'>
                        <h1>
                         Quantity: {quantity}
                        </h1>
                        <h1 className='font-extrabold'>
                            Price: {price}$
                        </h1>
                    </div>
                    <div className='flex justify-center mt-10 '>
                        <h1 className='mb-16'>
                            <span className=' font-semibold text-[#189AB4]'>Description:</span> {description}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysFullData;