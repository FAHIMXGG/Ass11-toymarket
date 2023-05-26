import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import UserToys from './UserToys';
import Swal from 'sweetalert2'
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';
import { Avatar, Tooltip } from 'flowbite-react';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useTitle('PlayfulParadise | My Toys')


    const url = `https://ass-11-toys-server.vercel.app/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://ass-11-toys-server.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toys Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }

    console.log(toys)
    return (
        <div>
            <div className='flex items-center flex-col mt-20 '>
                <div>
                    <Tooltip content={user?.displayName}>
                        <img className='rounded-full'  src={user?.photoURL}  alt="" />
                        </Tooltip>
                </div>
                <h1 className='font-semibold'>Hello, {user?.displayName}</h1>
            </div>
            
            <div className='px-5 md:mx-28 mb-5 mt-10 flex justify-center md:justify-end'>
                <Link to="/addNew"><button className='bg-[#75E6DA] font-semibold px-3 py-2 rounded-lg'>Add New</button></Link>
            </div>
            <div className='px-5 md:mx-32 flex justify-between bg-[#D4F1F4] mb-2 rounded-lg py-5 '>
                <div className='flex justify-between w-4/6 md:w-2/12 font-bold'>
                    <div>
                        <h1>Picture</h1>
                    </div>
                    <div>
                        <h1>Name</h1>
                    </div>
                </div>
                <div className='font-bold'>
                    <h1>Action</h1>
                </div>
            </div>
            <div className='mb-96'>
                {
                    toys.map(toy => <UserToys
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}

                    ></UserToys>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyToys;