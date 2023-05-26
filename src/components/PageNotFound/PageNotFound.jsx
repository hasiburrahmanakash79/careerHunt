import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center mt-20'>
            <h1 className='text-8xl font-extrabold'>Oops!</h1>
            <p className='text-xl py-5'>404 - Page not found</p>
            <Link to='/' className='btn-primary'>Go to home page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;