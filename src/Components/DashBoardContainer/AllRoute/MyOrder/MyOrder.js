import React, { useState } from 'react';
import OrderStepper from '../../OrderStepper/OrderStepper';

const MyOrder = () => {
  const [activeStep, setActiveStep] = useState(4);
  //need to fatch currnt order of this user and OrderFood item show in card
  return (
    <div>
      <OrderStepper activeStep={activeStep}setActiveStep={setActiveStep}/>
    </div>
  );
};

export default MyOrder;