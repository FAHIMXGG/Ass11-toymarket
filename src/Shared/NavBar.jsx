import { Avatar, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className=' '>
            <Navbar className=' '
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://github.com/FAHIMXGG">
                    <div className='flex gap-2 md:ml-16'>
                        <img className='w-10' src="https://cdn.discordapp.com/attachments/1094651413235253289/1109142459331661865/blue-car-logo-png.webp" alt="" />
                        <span className="self-center whitespace-nowrap md:text-xl font-semibold dark:text-white   font-mono text-[#05445E]">
                            PlayfulParadise
                        </span>
                    </div>
                </Navbar.Brand>
                <div className="flex md:order-2 md:mr-16">


                    {user ? <>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={user.photoURL ? <Tooltip content={user.displayName}><Avatar alt="User settings" img={user.photoURL} rounded={true} /></Tooltip> : <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.displayName}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user.email}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <Link to={`/myToys`}>Dashboard</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                {
                                    user ?
                                        <Link onClick={handleLogOut} to="/">Logout</Link> :
                                        <Link to="/login">Login</Link>
                                }
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </> :
                        <div className='flex gap-3'>
                            <Link className='bg-[#75E6DA] rounded-md px-3 font-semibold text-[#05445E] py-1' to="/login"><button>Login</button></Link>
                            <Link className='bg-[#75E6DA] rounded-md px-3 font-semibold text-[#05445E] py-1' to="/reg"><button>Register</button></Link>
                        </div>
                    }

                </div>
                <Navbar.Collapse className=' text-[#05445E]'>
                    <ActiveLink to="/home">Home</ActiveLink>
                    <ActiveLink to="/allToys">All Toys</ActiveLink>

                    {
                        user ? <ActiveLink to="/myToys">My Toys</ActiveLink> : ''
                    }
                    {
                        user ? <ActiveLink to="/addNew">Add A Toy</ActiveLink> : ''
                    }


                    <ActiveLink to="/blog">Blog</ActiveLink>





                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;