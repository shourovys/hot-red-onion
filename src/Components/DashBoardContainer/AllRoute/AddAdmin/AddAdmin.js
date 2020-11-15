import React from 'react';
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

  return (
      <div className="AddAdmin">
      <div className="inputField">
         <form className={classes.root } noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Add Admin Email" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="Enter Your Password" variant="outlined"  size="small" />
            <button className="squareBtn">ADD</button>
        </form>
      </div>
      </div>
    
  );
}