import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './DeliveryDetailsForm.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function DeliveryDetailsForm() {
    const classes = useStyles();

    const [deliveryDetails, setDeliveryDetails] = useState({})
    const [showError, setShowError] = useState({})
    const updateDeliveryDetails = (name, value) => setDeliveryDetails({ ...deliveryDetails, [name]: value })
    const updateShowError = (name, value = 'error') => setShowError({ ...showError, [name]: value })

    const checkInputValue = (name, value) => {
        if (value.length > 1) {
            updateDeliveryDetails(name, value)
            updateShowError(name, null)
        } else {
            updateShowError(name)
            // showPupUpWithData('Please Enter 3 Letter for Name', 'error')
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if (deliveryDetails.FlatNo && deliveryDetails.roodName && deliveryDetails.DeliveryInstruction) {
            console.log(deliveryDetails);
        } else {
            //show error
        }
    }
    return (
        <div className="DeliveryDetailsForm">
            <form className={classes.root} onSubmit={handelSubmit}>

                <TextField
                    id="outlined-basic"
                    className='input'
                    label="Delivery Type"
                    variant="outlined"
                    defaultValue="Deliver To Door"
                    InputProps={{
                        readOnly: true,
                    }}
                    size="small"
                    name='deliveryType'
                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    className='input'
                    label="Rood Name"
                    variant="outlined"
                    // defaultValue="test"
                    size="small"
                    name='roodName'
                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                    error={showError.roodName}
                />

                <TextField
                    id="outlined-basic"
                    className='input'
                    label="Flat or Floor"
                    variant="outlined"
                    // defaultValue="test"
                    size="small"
                    // ref={register({ required: true })}
                    name='FlatNo'
                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                    error={showError.FlatNo}

                />

                <TextField
                    id="outlined-basic"
                    className='input'
                    label="Your businessName"
                    variant="outlined"
                    // defaultValue="test"
                    size="small"
                    name='BusinessName'
                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                    error={showError.BusinessName}
                />

                <TextField
                    id="outlined-basic"
                    className='input'
                    label="Give Delivery Instruction"
                    variant="outlined"
                    // defaultValue="test"
                    size="small"
                    name='DeliveryInstruction'
                    onBlur={(e) => checkInputValue(e.target.name, e.target.value)}
                    error={showError.DeliveryInstruction}
                />
                <input type="submit" className='squareBtn' />
            </form>
        </div>
    );
}