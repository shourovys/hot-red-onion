import React from 'react';
import './Logo.css'
import logoImg from '../../../Images/logo2.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className='logo-container'>
            <img src={logoImg} alt="Red Onion" />
        </Link>
    );
};

export default Logo;