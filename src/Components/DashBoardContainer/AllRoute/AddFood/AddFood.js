import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const AddFood = () => {
    const classes = useStyles();
    return (
        <div className='addFoodItem'>
            <div className='foodItemInfo'>
                <div className='img-input'></div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Food Name" size="small" />
                    <TextField id="standard-basic" label="Shot Descriptions" size="small" />
                    <TextField id="standard-basic" label="Descriptions" size="small"   multiline rows={3}/>
                    <TextField id="standard-basic" label="Price" size="small" type="number"/>
                <button className="squareBtn">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;