import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import profileImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Navbar = () => {
    const { user,setUser } = use(AuthContext);
    const links = <>
        <li><NavLink className={'opacity-60 text-lg'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={'opacity-60 text-lg'} to={'/about'}>About</NavLink></li>
        <li><NavLink className={'opacity-60 text-lg'} to={'/career'}>Career</NavLink></li>
    </>

    const logoutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out.');
                setUser(null);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="navbar bg-base-100 mt-4 w-11/12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                {
                    user ? <><img src={profileImg} alt="" />
                        <button onClick={logoutHandler} className='btn btn-primary text-lg text-white px-8 py-3'>LogOut</button></> : <Link to={'/auth/login'} className='btn btn-primary text-lg text-white px-8 py-3'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;