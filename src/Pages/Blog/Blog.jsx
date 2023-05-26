import React from 'react';
import useTitle from '../../Hook/UseTitle';
import Footer from '../../Shared/Footer/Footer';

const Blog = () => {

    useTitle('PlayfulParadise | Blog')
    return (
        <div>
            <div className='mb-10'>
                <div className='bg-[#D4F1F4] text-center mb-5'>
                    <h1 className='font-bold text-2xl py-32 text-[#189AB4]'>Blog</h1>
                </div>
                <div className='px-10'>
                    <div className='border text-center bg-[#D4F1F4] p-5'>
                        <h1 className='mb-2 font-semibold text-[#189AB4]'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p>Access token is an unique token for users that is issued by an authentication server to a client application after successful authentication.  <br />Refresh token is a long-lived credential that is issued alongside an access token during the authentication process <br />
                        we can store them on the client-side by using cookie or local storage.
                        </p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#D4F1F4] p-5'>
                        <h1 className='mb-2 font-semibold text-[#189AB4]'>Compare SQL and NoSQL databases?</h1>
                        <p>SQL (Structured Query Language) and NoSQL (Not Only SQL)  <br /> SQL Tabular data model.various data models, such as key-value pairs, documents, column families, or graphs <br />
                        Structured Query Language (SQL) . NoSQL different query languages specific to their data model
                        </p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#D4F1F4] p-5'>
                        <h1 className='mb-2 font-semibold text-[#189AB4]'>What is express js? What is Nest JS?</h1>
                        <p>Express.js is a framework for Node.js. intuitive API for handling HTTP requests, routing, middleware, and response handling.<br /> Nest.js is a progressive, opinionated framework for building efficient and scalable server-side applications.
                        </p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#D4F1F4] p-5'>
                        <h1 className='mb-2 font-semibold text-[#189AB4]'>What is MongoDB aggregate and how does it work?</h1>
                        <p>MongoDB for data store<br /> We can store data by using express js and node js by using get, put patch, post etc
                        </p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;