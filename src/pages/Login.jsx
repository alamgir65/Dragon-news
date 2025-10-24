import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const {user,loginUser,setUser} =use(AuthContext);
    console.log(user);

    const loginHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email,password)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                e.target.reset();
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-bold text-center">Login Your account</h2>
                <div className="card-body">
                    <form onSubmit={loginHandler}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <p className='mt-3'>Don't have any account? please <NavLink to={'/auth/register'} className={'text-blue-500 underline'}>Register</NavLink> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;