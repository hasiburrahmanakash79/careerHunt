import React from 'react';

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3 md:p-28 p-10 bg-black text-slate-300'>
            <div className='md:w-3/4'>
                <h1 className='text-2xl font-bold my-3'>CareerMaster</h1>
                <p className='pb-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img src="../../../public/Icons/Group.png" alt="" />
            </div>
            <div>
                <h5 className='text-2xl font-semibold my-3'>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Work</li>
                    <li>Latest News</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h5 className='text-2xl font-semibold my-3'>Support</h5>
                <ul>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a partner</li>
                    <li>Developers</li>
                </ul>
            </div>
            <div>
                <h5 className='text-2xl font-semibold my-3'>Contact</h5>
                <ul>
                    <li>524 Broadway , NYC</li>
                    <li>+1 777 - 978 - 5570</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;