import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center bg-slate-100 "'>
            <div className='md:ml-20 ml-5 md:w-96'>
                <h1 className='text-5xl md:text-7xl font-bold'>Find your <br /> <span className='title'>Dream Job</span> <br /> here</h1>
                <p className='my-7 text-xl text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-primary">Get Start</button>
            </div>
            <div>
                <img src="https://i.ibb.co/QP3Hy3s/P3-OLGJ1-copy-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;