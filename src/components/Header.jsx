import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-y-3'>
            <img src={logo} alt="logo" />
            <p className='opacity-60 text-lg font-medium'>Journalism Without Fear or Favour</p>
            <h6 className='text-xl font-semibold opacity-80'>Sunday, November 27, 2025</h6>
        </div>
    );
};

export default Header;