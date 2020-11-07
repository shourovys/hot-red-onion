import React, { useState } from 'react';
import './Authentication.css'
// import Login from './LogIn';
import SignIn from './SignIn';
import google from '../../Images/google.svg'
import facebook from '../../Images/facebook.svg'
import twitter from '../../Images/twitter.svg'
import sideImg from '../../Images/login.svg'
import { motion } from "framer-motion"
import { imgVariant } from './AnimateVariant';
import { useAuth } from './AuthFunctions';
import UserInfo from './UserInfo';
import loginImg from '../../Images/loginImg.svg'




const Authentication = () => {
    const [oldUser, setOldUser] = useState(true)
    const { sineUpWithGoogle, sineUpWithFacebook, currentUser } = useAuth()

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
                : <UserInfo />
            }
        </div>

    );
};

export default Authentication;