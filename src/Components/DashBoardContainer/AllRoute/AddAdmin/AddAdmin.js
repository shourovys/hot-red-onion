import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

  const [adminInfo, setAdminInfo] = useState({})
  const [showError, setShowError] = useState({})

  const updateAdminInfo = (name, value) => setAdminInfo({ ...adminInfo, [name]: value })
  const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

    const checkInputValue = (name, value) => {
      switch (name) {
        case 'email':
          const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (pattern.test(value)) {
              updateAdminInfo(name, value)
              updateShowError(name, null)
          } else {
              updateShowError(name)
              // showPupUpWithData('Please Enter a Valid Email Address', 'error')
          }
          break;
          case 'password':
              if (value.length > 6) {
                //chack admin password in database and return bullion
                  updateAdminInfo(name, value)
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

  const createNewAdmin = (event) => {
    event.preventDefault()
    if ( adminInfo.email && adminInfo.password) {
    console.log("sineUpNewUser -> Info", adminInfo)
      
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
              name='email'
              label="Add Admin Email" 
              variant="outlined" 
              size="small"  
              error={showError.name} 
              onBlur={(e) => 
              checkInputValue(e.target.name, e.target.value)}
            />

            <TextField 
              id="outlined-basic" 
              name='password'
              label="Enter Your Password" 
              variant="outlined"  
              size="small"  
              error={showError.name} 
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