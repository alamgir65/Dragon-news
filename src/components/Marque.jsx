import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='flex items-center w-11/12 gap-x-5 mt-8 mx-auto p-3 bg-slate-100'>
            <button className='btn bg-secondary text-white px-6 py-3 rounded-lg text-xl mr-5'>Latest</button>
            <Marquee className='gap-4' pauseOnHover={true} speed={60}>
                <p className='text-accent text-lg font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quam!
                </p>
                <p className='text-accent text-lg font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quam!
                </p>
                <p className='text-accent text-lg font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quam!
                </p>
            </Marquee>
        </div>
    );
};

export default Marque;