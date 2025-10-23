import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
            <h2 className='font-bold text-xl'>All Categories</h2>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;