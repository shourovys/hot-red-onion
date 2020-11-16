import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { motion } from "framer-motion"
import { inputVariant } from './AnimateVariant';
import { useAuth } from './AuthFunctions';



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1.5),
    },
}));

const SignIn = ({ oldUser }) => {
    const classes = useStyles();

    const { sineUpWithEmail, logInWithEmail } = useAuth()
    // const { showPupUpWithData } = usePopup()

    const [userInfo, setUserInfo] = useState({})
    const [showError, setShowError] = useState({})
    const [daley, setDaley] = useState(false)

    useEffect(() => {
        setDaley(false)
        setTimeout(() => {
            setDaley(true)
        }, .1);
    }, [oldUser])

    const updateUserInfo = (name, value) => setUserInfo({ ...userInfo, [name]: value })
    const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

    //vai why we need to pass key in  []
    const checkInputValue = (name, value) => {
        switch (name) {
            case 'name':
                if (value.length > 3) {
                    updateUserInfo(name, value)
                    updateShowError(name, null)
                } else {
                    updateShowError(name)
                    // showPupUpWithData('Please Enter 3 Letter for Name', 'error')
                }
                break;
            case 'email':
                const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (pattern.test(value)) {
                    updateUserInfo(name, value)
                    updateShowError(name, null)
                } else {
                    updateShowError(name)
                    // showPupUpWithData('Please Enter a Valid Email Address', 'error')
                }
                break;
            case 'password':
                if (value.length > 6) {
                    updateUserInfo(name, value)
                    updateShowError(name, null)
                } else {
                    updateShowError(name)
                    // showPupUpWithData('Please Enter 6 digit Password', 'error')
                }
                break;
            default:
                break;
        }

    }

    const sineUpNewUser = () => {
        if (userInfo.name && userInfo.email && userInfo.password) {
            sineUpWithEmail(userInfo.name, userInfo.email, userInfo.password)
            // showPupUpWithData('Your request sended')
        }
        else {
            // showPupUpWithData('Please Fill All Input', 'error')
        }
    }

    const loginUser = () => {
        if (userInfo.email && userInfo.password) {
            logInWithEmail(userInfo.email, userInfo.password)
            // showPupUpWithData('Your request sended for Login')
        }
        else {
            // showPupUpWithData('Please Fill All Input', 'error')
        }
    }



    return (
        <div className='signIn'>
            <h1>{oldUser ? 'Welcome Back!' : 'Join With Us'}</h1>
            <p className='light-text'>{oldUser ? 'Login to continue' : 'SignIn to continue'}</p>

            <div className="form">
                {
                    !oldUser &&
                    <motion.div className={classes.margin}
                        variants={inputVariant(100)}
                        initial='initial'
                        animate='animate'
                    >
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="Enter Your Name"
                                    name="name"
                                    error={showError.name}
                                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </motion.div>
                }
                {
                    daley &&
                    <motion.div className={classes.margin}
                        variants={inputVariant(30)}
                        initial='initial'
                        animate='animate'
                    >
                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="Enter your Email"
                                    name="email"
                                    error={showError.email}
                                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </motion.div>
                }
                {
                    daley &&
                    <motion.div className={classes.margin}
                        variants={inputVariant(-30)}
                        initial='initial'
                        animate='animate'
                    >

                        <Grid container spacing={2} alignItems="flex-end">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="Enter your Password"
                                    name="password"
                                    type='password'
                                    error={showError.password}
                                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </motion.div>
                }
                {
                    daley &&
                    <motion.div className="Login-action"
                        variants={inputVariant(-60)}
                        initial='initial'
                        animate='animate'

                    >
                        <button
                            onClick={oldUser ? loginUser : sineUpNewUser}
                            id='loginBtn'
                        >
                            {oldUser ? 'LOGIN' : 'SIGN UP'}
                        </button>
                    </motion.div>
                }

            </div>

        </div>

    );
};

export default SignIn;