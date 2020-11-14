import React from 'react';
import { connect } from 'react-redux';
import { updateQuantity } from '../../../Redux/Action/CartAction';
import OrderedFood from './OrderedFood/OrderedFood';
import OrderedPrice from './OrderedPrice/OrderedPrice';

const OrderInfo = ({cart,updateQuantity,allDeliveryData}) => {

    return (
        <div className='OrderInfo'>
            <p>Form <span>Dhaka Food Shop</span></p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
            <div className="orderFoods">
            {
                cart.map(cartFood=><OrderedFood cartFood={cartFood} updateQuantity={updateQuantity}/>)
            }
            </div>
           <OrderedPrice cart={cart}/>
           <button className={allDeliveryData?'squareBtn active':'squareBtn inActive'}>Place Order</button>
        </div>
    );
};

const mapStateToProps=state=>{
    return {
        cart:state.cart.cart
    }
}

const mapDispatchToProps={updateQuantity}
export default connect(mapStateToProps,mapDispatchToProps)(OrderInfo);