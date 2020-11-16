import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { encode, decode } from 'js-base64';

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

    const [adminInfo, setAdminInfo] = useState({})
    const [showError, setShowError] = useState({})

    const updateAdminInfo = (name, value) => setAdminInfo({ ...adminInfo, [name]: value })
  const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

    const checkInputValue = (name, value) => {
      switch (name) {
        case 'foodName':
          if (value.length>6) {
              updateAdminInfo(name, value)
              updateShowError(name, null)
          } else {
              updateShowError(name)
              // showPupUpWithData('Please Enter a Valid Email Address', 'error')
          }
          break;

          case 'shotDescriptions':
              if (value.length > 12) {
                //chack admin password in database and return bullion
                  updateAdminInfo(name, value)
                  updateShowError(name, null)
              } else {
                  updateShowError(name)
                  // showPupUpWithData('Please Enter 6 digit Password', 'error')
              }
              break;

          case 'descriptions':
              if (value.length > 12) {
                //chack admin password in database and return bullion
                  updateAdminInfo(name, value)
                  updateShowError(name, null)
              } else {
                  updateShowError(name)
                  // showPupUpWithData('Please Enter 6 digit Password', 'error')
              }
              break;
              

          case 'price':
              if (value.length > 1) {
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
    if ( adminInfo.foodName && adminInfo.shotDescriptions && adminInfo.descriptions && adminInfo.price ) {
    console.log("sineUpNewUser -> Info", adminInfo)
      
        // showPupUpWithData('Your request sended')
    }
    else {
        // showPupUpWithData('Please Fill All Input', 'error')
    }
}
    return (
        <div className='addFoodItem'>
            <div className='foodItemInfo'>
                <div className='img-input'></div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                      id="standard-basic" 
                      name='foodName'  
                      label="Food Name" 
                      size="small"
                      error={showError.foodName} 
                      onBlur={(e) => 
                      checkInputValue(e.target.name, e.target.value)} 
                    />
                    <TextField 
                      id="standard-basic"  
                      name='shotDescriptions'     
                      label="Shot Descriptions" 
                      size="small"
                      error={showError.shotDescriptions} 
                      onBlur={(e) => 
                      checkInputValue(e.target.name, e.target.value)} 
                    />
                    <TextField 
                      id="standard-basic" 
                      name='descriptions'
                      label="Descriptions" 
                      size="small"
                      error={showError.descriptions} 
                      onBlur={(e) => 
                      checkInputValue(e.target.name, e.target.value)}   
                      multiline rows={3}
                    />
                    <TextField 
                      id="standard-basic" 
                      name='price'
                      label="Price" 
                      size="small"
                      error={showError.price} 
                      onBlur={(e) => 
                      checkInputValue(e.target.name, e.target.value)} 
                      type="number"
                    />
                <button
                onClick={createNewAdmin}
                className="squareBtn">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;