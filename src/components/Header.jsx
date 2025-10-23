import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-y-3'>
            <img src={logo} alt="logo" />
            <p className='text-accent text-lg font-medium'>Journalism Without Fear or Favour</p>
            <h6 className='text-xl font-semibold text-accent'>{format(new Date(),"EEEE, MMMM dd, yyyy")}</h6>
        </div>
    );
};

export default Header;