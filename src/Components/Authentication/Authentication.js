import { motion } from "framer-motion";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import facebook from '../../Images/facebook.svg';
import google from '../../Images/google.svg';
import sideImg from '../../Images/login.svg';
import loginImg from '../../Images/loginImg.svg';
import twitter from '../../Images/twitter.svg';
import { imgVariant } from './AnimateVariant';
// import './Authentication.css';
import { useAuth } from './AuthFunctions';
// import Login from './LogIn';
import SignIn from './SignIn';
import UserInfo from './UserInfo';




const Authentication = () => {
    const [oldUser, setOldUser] = useState(true)
    const { sineUpWithGoogle, sineUpWithFacebook, } = useAuth()
    const currentUser = useSelector(state => state.userInfo.currentUserInfo)


    return (
        <div className='authentication'>
            <div className="">
                <img
                    className='svg'
                    src={currentUser.isLogin ? loginImg : sideImg} alt="side Img"
                />
            </div>

            {!currentUser.isLogin
                ? <div className="login-container">

                    {oldUser
                        ? <p>New User?&nbsp;
                             <samp
                                onClick={() => setOldUser(false)}
                                className='colourBlue'
                            >
                                Sign Up</samp>
                        </p>
                        : <p>Already Have A Account?&nbsp;
                             <samp
                                onClick={() => setOldUser(true)}
                                className='colourBlue'
                            >
                                Log In</samp>
                        </p>
                    }

                    <SignIn oldUser={oldUser} />


                    <div className="login-svg">
                        {oldUser
                            ? <p className='light-text'>Login With</p>
                            : <p className='light-text'>Sign Up With</p>
                        }
                        <motion.img
                            variants={imgVariant(2)}
                            initial='initial'
                            animate='animate'
                            whileHover='whileHover'
                            onClick={sineUpWithGoogle}
                            src={google} alt="google" />

                        <motion.img
                            variants={imgVariant(3)}
                            initial='initial'
                            animate='animate'
                            whileHover='whileHover'
                            onClick={sineUpWithFacebook}
                            src={facebook} alt="facebook" />
                        <motion.img
                            variants={imgVariant(4)}
                            initial='initial'
                            animate='animate'
                            whileHover='whileHover'
                            src={twitter} alt="twitter" />

                    </div>

                </div>
                : <UserInfo showBtn={true} />
            }
        </div>

    );
};

export default Authentication;