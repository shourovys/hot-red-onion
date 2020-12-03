import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { create } from '../../../api';
import { removeAllFormCart, updateQuantity } from '../../../Redux/Action/CartAction';
import OrderedFood from './OrderedFood/OrderedFood';
import OrderedPrice from './OrderedPrice/OrderedPrice';

const OrderInfo = ({cart,updateQuantity,allDeliveryData,currentUserInfo,setAllDeliveryData,removeAllFormCart}) => {
    const history = useHistory()
    const resetOrderData=()=>{
        setAllDeliveryData(null)
        removeAllFormCart()
        history.replace('/dashboard/myOrder')
    }

    const sendCartData= async ()=>{
        const orderInfo={
            cart:cart,
            allDeliveryData:allDeliveryData,
            userEmail:currentUserInfo.email,
            orderActiveStep:1
        }
       
        try {
            const res = await create(orderInfo)
            resetOrderData()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='OrderInfo'>
            <p>Form <span>Dhaka Food Shop</span></p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
            <div className="orderFoods">
            {
                cart.map(cartFood=><OrderedFood cartFood={cartFood} key={cartFood._id} updateQuantity={updateQuantity}/>)
            }
            </div>
           <OrderedPrice cart={cart}/>
           <button 
           onClick={sendCartData}
           className={allDeliveryData?'squareBtn active':'squareBtn inActive'}
           >
               Place Order
            </button>
        </div>
    );
};

const mapStateToProps=state=>{
    return {
        cart:state.cart.cart,
        currentUserInfo:state.userInfo.currentUserInfo

    }
}

const mapDispatchToProps={updateQuantity,removeAllFormCart}
export default connect(mapStateToProps,mapDispatchToProps)(OrderInfo);