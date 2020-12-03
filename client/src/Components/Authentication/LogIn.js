// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import LockIcon from '@material-ui/icons/Lock';
// import { motion } from "framer-motion"
// import { inputVariant1, inputVariant2 } from './AnimateVariant';
// import { useAuth } from './AuthFunctions';
// import { usePopup } from '../Notification/PopupContext';


// const useStyles = makeStyles((theme) => ({
//     margin: {
//         margin: theme.spacing(1.5),
//     },
// }));

// export default function Login() {
//     const classes = useStyles();

//     const { logInWithEmail } = useAuth()
//     const { setPopupData } = usePopup()

//     const [userInfo, setUserInfo] = useState({})
//     const updateInfo = (name, value) => {
//         setUserInfo({ ...userInfo, [name]: value })
//     }


//     const loginUser = () => {

//         else {
//         setPopupData({
//             massage: 'Please Fill All Input',
//             type: 'error'
//         })
//     }
// }

// return (
//     <div className='login'>
//         <h1>Welcome Back!</h1>
//         <p className='light-text'>Login to continue </p>
//         <div className="form">
//             <motion.div
//                 variants={inputVariant1}
//                 initial='initial'
//                 animate='animate'
//                 className={classes.margin}>
//                 <Grid container spacing={2} alignItems="flex-end">
//                     <Grid item>
//                         <AccountCircle />
//                     </Grid>
//                     <Grid item>
//                         <TextField
//                             id="input-with-icon-grid"
//                             // helperText="Incorrect entry."
//                             label="Enter your Email"
//                             name="email"
//                             onBlur={(e) => updateInfo(e.target.name, e.target.value)}
//                         />
//                     </Grid>
//                 </Grid>
//             </motion.div>

//             <motion.div
//                 variants={inputVariant2}
//                 initial='initial'
//                 animate='animate'
//                 className={classes.margin}>
//                 <Grid container spacing={2} alignItems="flex-end">
//                     <Grid item>
//                         <LockIcon />
//                     </Grid>
//                     <Grid item>
//                         <TextField
//                             id="input-with-icon-grid"
//                             label="Enter your Password"
//                             name="password"
//                             type="password"
//                             onBlur={(e) => updateInfo(e.target.name, e.target.value)}
//                         />
//                     </Grid>
//                 </Grid>
//             </motion.div>
//             <div className="Login-action">
//                 <button
//                     id='loginBtn'
//                     onClick={loginUser}
//                 >LOGIN</button>
//                 <p>FORGAT PASSWORD?</p>
//             </div>

//         </div>

//     </div>

// );
// }