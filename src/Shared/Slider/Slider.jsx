import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='mb-20 mt-10 '>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1109066006833405952/small-red-retro-toy-car-with-heart-roof-pink_114937-453.webp')] bg-cover bg-center dark:bg-gray-700 dark:text-white ">
                        <div className=' bg-[#05445E]/30 backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st '>Red Car Collections</h1> <br />
                            <center><Link to="/search/red"><button className='bg-[#74eadf] px-3 py-1 rounded font-medium border-2 hover:bg-cyan-500 hover:text-white text-black border-cyan-100'>Explore!</button></Link></center>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1109066002920128562/rozowy-samochod-dostarczajacy-czerwone-pudelko-i-kwiaty-na-rozowym-tle_434420-1957.webp')] bg-cover dark:bg-gray-700 dark:text-white ">
                        <div className='bg-[#05445E]/30 backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st'>Exclusive Collections</h1> <br />
                            <center><Link to="/search/Dodge%20Diecast"><button className='bg-[#74eadf] px-3 py-1 rounded font-medium border-2 hover:bg-cyan-500 hover:text-white text-black border-cyan-100'>Explore!</button></Link></center>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1109065989653528626/istockphoto-1181907013-170667a.jpg')] bg-cover dark:bg-gray-700 dark:text-white">
                        <div className='bg-[#05445E]/30  backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st'>Truck Collections</h1> <br />
                            <center><Link to="/search/truck"><button className='bg-[#74eadf] px-3 py-1 rounded font-medium border-2 hover:bg-cyan-500 hover:text-white text-black border-cyan-100'>Explore!</button></Link></center>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;