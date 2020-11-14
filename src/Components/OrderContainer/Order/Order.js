import React, { useState } from 'react';
import DeliveryDetailsForm from '../DeliveryDetailsForm/DeliveryDetailsForm';
import OrderInfo from '../OrderInfo/OrderInfo';
// import './Order.css'

const Order = () => {
    const [allDeliveryData, setAllDeliveryData] = useState(null)

    return (
        <div className=' order'>
            <div className="DeliveryDetailsFormContainer">
                <DeliveryDetailsForm setAllDeliveryData={setAllDeliveryData}/>
            </div>
            <div className="OrderInfoContainer">
                <OrderInfo allDeliveryData={allDeliveryData} />
            </div>

        </div>
    );
};

export default Order;
