import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const SocialLinks = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold mt-8'>Find us on</h2>
            <div className='mt-5 space-y-3'>
                <button className='btn flex gap-3 w-full'><FaFacebook/> Facebook</button>
                <button className='btn flex gap-3 w-full'><FaTwitter/> Twitter</button>
                <button className='btn flex gap-3 w-full'><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default SocialLinks;