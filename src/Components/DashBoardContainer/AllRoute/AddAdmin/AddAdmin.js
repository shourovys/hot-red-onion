import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeAdmin } from '../../../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function AddAdmin() {
  const classes = useStyles();

  const adminEmail = useSelector(state => state.userInfo.currentUserInfo.email)


  const [adminInfo, setAdminInfo] = useState({})
  const [showError, setShowError] = useState({})

  const updateAdminInfo = (name, value) => setAdminInfo({ ...adminInfo, [name]: value })
  const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

    const checkInputValue = (name, value) => {
      switch (name) {
        case 'adminEmail':
          const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (pattern.test(value)) {
              updateAdminInfo(name, value)
              updateShowError(name, null)
          } else {
              updateShowError(name)
              // showPupUpWithData('Please Enter a Valid Email Address', 'error')
          }
          break;
          
          default:
              break;
      }
  }

  const createNewAdmin = async (event) => {
    event.preventDefault()
    if ( adminInfo.adminEmail) {
    console.log("sineUpNewUser -> Info", adminInfo)

    const {data}=await makeAdmin(adminEmail,adminInfo)
    console.log("🚀 ~ file: AddAdmin.js ~ line 52 ~ createNewAdmin ~ data", data)
      
        // showPupUpWithData('Your request sended')
    }
    else {
        // showPupUpWithData('Please Fill All Input', 'error')
    }
}

  return (
      <div className="AddAdmin">
      <div className="inputField">
         <form className={classes.root } noValidate autoComplete="off">
            <TextField 
              id="outlined-basic" 
              name='adminEmail'
              label="Add Admin Email" 
              variant="outlined" 
              size="small"  
              error={showError.adminEmail} 
              onBlur={(e) => 
              checkInputValue(e.target.name, e.target.value)}
            />

            

            <button className="squareBtn"
              onClick={createNewAdmin}
            >ADD</button>
        </form>
      </div>
      </div>
    
  );
}