import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';

const PrivateRouteProvider = ({children}) => {
    const navigate = useNavigate();
    const {user} = use(AuthContext);
    if(!user){
        navigate('/auth/login');
        return;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRouteProvider;