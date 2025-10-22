import React from 'react';
import Header from '../components/Header';
import Marque from '../components/Marque';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='px-5 mx-auto'>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
        </div>
    );
};

export default HomeLayout;