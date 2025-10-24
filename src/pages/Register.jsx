import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { use } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {

    const {createUser,setUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);

        createUser(email,password)
            .then(res => {
                const profile = {
                    displayName : name,
                    photoURL : photo
                };
                updateProfile(res.user,profile)
                    .then(() => {
                        console.log('User added successfully,    ', res.user);
                        setUser(res.user);
                        e.target.reset();
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    } 
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-bold text-center">Register Your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input w-full" placeholder="Name" />
                            <label className="label">Photo Url</label>
                            <input name='photo' type="text" className="input w-full" placeholder="PhotoURL" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input w-full" placeholder="Password" />
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='mt-3'>Already have an account? please <NavLink to={'/auth/login'} className={'text-blue-500 underline'}>Login</NavLink> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;