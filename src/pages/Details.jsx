import React from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";


const Details = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const news = data.find(news => news.id == id);

    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    return (
        <div>
            <header className='py-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 mt-5'>
                <div className='col-span-9'>
                    <h1 className='text-2xl font-bold'>Dragon News</h1>
                    <div className='p-7 border-1 rounded-2xl mt-5'>
                        <img src={news.image_url} className='rounded-xl' alt="news-image" />
                        <h1 className='text-3xl font-bold opacity-80 my-5'>{news.title}</h1>
                        <p className='text-accent'>{news.details}</p>
                        <button onClick={()=>{navigate(-1)}} className='btn btn-secondary mt-10 text-lg'><FaArrowLeftLong/> All news in this category</button>
                    </div>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </main>
        </div>
    );
};

export default Details;