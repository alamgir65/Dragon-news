import React from 'react';
import img1 from '../../assets/swimming.png'
import img2 from '../../assets/class.png'
import img3 from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='mt-7'>
            <h2 className="text-xl font-semibold">Q-Zone</h2>
            <div className='bg-base-200 py-5 mx-auto text-center flex flex-col gap-5 w-full px-5'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default QZone;