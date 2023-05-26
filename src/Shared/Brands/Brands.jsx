import React from 'react';

const Brands = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='mb-20'>
            <div className='text-center font-semibold text-2xl mb-10'>
                <h1 className='mb-3 font-mono'>Featured Brands</h1>
                <div className='flex justify-center'>
                <hr className='border-1 w-3/12 border-cyan-400' />
                </div>
            </div>
            <div className='flex justify-center gap-3 '>
                <div className='bg-red-600 w-2/12 p-5 rounded-lg flex items-center'>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1109093799763914802/png-transparent-lego-logo-lego-star-wars-logo-brand-toy-lego-text-photography-trademark.png" alt="" />
                </div>
                <div className='bg-yellow-200 w-2/12 p-5 rounded-lg'>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1109093798937636965/5a0c74ab9642de34b6b65cf3.png" alt="" />
                </div>
                <div className='bg-yellow-200 w-2/12 p-5 rounded-lg'>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1109093799206068275/hot-wheels-3-logo-png-transparent.png" alt="" />
                </div>
                <div className='bg-red-600 w-2/12 p-5 rounded-lg flex items-center'>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1109093799520636938/Nerf_logo.svg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;