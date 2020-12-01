import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../api';
import { errorNF } from '../../../../Redux/Action/notificationsAction';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const categories = [
  {
    value: 'breakfast',
    label: 'Breakfast',
  },
  {
    value: 'lunch',
    label: 'Lunch',
  },
  {
    value: 'dinner',
    label: 'Dinner',
  }
];

const AddFood = () => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const [adminInfo, setAdminInfo] = useState({category:'dinner'})
  const [showError, setShowError] = useState({})

  const updateAdminInfo = (name, value) => setAdminInfo({ ...adminInfo, [name]: value })
  const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

  const checkInputValue = (name, value) => {
    switch (name) {
      case 'name':
        if (value.length > 6) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
          dispatch(errorNF('Name required minimum 6 letter'))
        }
        break;

      case 'shotDescription':
        if (value.length > 12) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
          dispatch(errorNF('shotDescription required minimum 12 letter'))
        }
        break;

      case 'description':
        if (value.length > 22) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
          dispatch(errorNF('description required minimum 22 letter'))
        }
        break;


      case 'price':
        if (value > 1) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
          dispatch(errorNF('price must be positive number'))
        }
        break;

      case 'img':
        if (value) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
          dispatch(errorNF('This field is required'))
        }
        break;

      case 'category':
        if (value) {
          updateAdminInfo(name, value)
          updateShowError(name, null)
        } else {
          updateShowError(name)
        }
        break;
      default:
        break;
    }
  }

  const createNewAdmin = (event) => {
    event.preventDefault()
    if (adminInfo.name && adminInfo.shotDescription && adminInfo.description && adminInfo.price && adminInfo.img ) {
      console.log("sineUpNewUser -> Info", adminInfo)
      const addThisProduct= async ()=>{
        const {data}= await addProduct(adminInfo)
        if(data){
          setAdminInfo({category:'dinner'})
          console.log('data added')
        }
      }
      addThisProduct()
    }
    else {
      dispatch(errorNF('Pass All inputs'))
    }
  }
  return (
    <div className='addFoodItem'>
      <div className='foodItemInfo'>
        <div className='img-input'></div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            name='name'
            label="Food Name"
            size="small"
            error={showError.name}
            onBlur={(e) =>
              checkInputValue(e.target.name, e.target.value)}
          />
          <TextField
            id="standard-basic"
            name='shotDescription'
            label="Shot Descriptions"
            size="small"
            error={showError.shotDescription}
            onBlur={(e) =>
              checkInputValue(e.target.name, e.target.value)}
          />
          <TextField
            id="standard-basic"
            name='description'
            label="Descriptions"
            size="small"
            error={showError.description}
            onBlur={(e) =>
              checkInputValue(e.target.name, e.target.value)}
            multiline rows={3}
          />
          <TextField
              id="standard-select-currency"
              select
              name='category'
              label="category"
              value={adminInfo.category}
              onChange={(e) =>checkInputValue(e.target.name, e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value} textAline='start'>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
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
          <FileBase type="file" name='img' multiple={false} onDone={({ base64 }) => checkInputValue('img', base64)} />
          <button
            onClick={createNewAdmin}
            className="squareBtn">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;