import React from 'react';
import OrderStepper from '../../OrderStepper/OrderStepper';

const MyOrder = ({currentOrder}) => {
  
  return (
    <div>
      {
        currentOrder && 
        currentOrder.map(order=><OrderStepper key={order._id}order={order}/>)
      }
      
    </div>
  );
};

export default MyOrder;