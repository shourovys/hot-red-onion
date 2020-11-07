import React from 'react';
import { useAuth } from './AuthFunctions';

const UserInfo = () => {
    const { currentUser: { name, email, photo }, logOut } = useAuth()
    return (
        <div className='user-info'>
            <img src={photo} alt="Profile" />
            <h1>{name}</h1>
            <h4>{email}</h4>
            <button
                id='loginBtn'
                onClick={logOut}
            >Log Out</button>
        </div>
    );
};

export default UserInfo;