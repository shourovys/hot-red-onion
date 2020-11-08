import React from 'react';
import DeliveryDetailsForm from '../DeliveryDetailsForm/DeliveryDetailsForm';
import OrderInfo from '../OrderInfo/OrderInfo';
import './Order.css'

const Order = () => {
    return (
        <div className=' order'>
            <div className="left_side">
                <DeliveryDetailsForm />

            </div>
            <div className="right_side">
                <OrderInfo />

            </div>

        </div>
    );
};

export default Order;
