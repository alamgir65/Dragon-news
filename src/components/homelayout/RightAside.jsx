import React from 'react';
import SocialLogin from './SocialLogin';
import SocialLinks from './SocialLinks';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <SocialLinks></SocialLinks>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;