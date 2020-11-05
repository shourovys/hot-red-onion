import React from 'react';
import './Logo.css'
import logoImg from '../../../Images/logo2.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img src={logoImg} alt="Red Onion" />
        </div>
    );
};

export default Logo;