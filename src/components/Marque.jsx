import React from 'react';

const Marque = () => {
    return (
        <div className='flex items-center gap-x-5 mt-8 mx-auto p-3 bg-slate-100'>
            <button className='btn bg-secondary text-white px-4 py-2 rounded-lg text-xl mr-5'>Latest</button>
            <marquee width="100%"  className="opacity-80 text-xl">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Match Highlights: Germany vs Spain — as it happened Match Highlights: Germany vs Spain — as it happened Match Highlights: Germany vs Spain — as it happened</marquee>
        </div>
    );
};

export default Marque;