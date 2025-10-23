import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories.length)
    return (
        <div className='grid grid-cols-1 gap-3 mt-4'>
            {
                categories.map(category => (
                    <NavLink to={`/category/${category.id}`} className={'btn bg-base-100 text-lg text-accent border-0 hover:bg-base-300'} key={category.id}>{category.name}</NavLink>
                ))
            }
        </div>
    );
};

export default Categories;