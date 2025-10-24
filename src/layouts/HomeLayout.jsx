import React from 'react';
import Header from '../components/Header';
import Marque from '../components/Marque';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='px-5 mx-auto'>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>

            <main className='w-11/12 mx-auto gap-4 grid grid-cols-12 my-4'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;