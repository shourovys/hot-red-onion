import React from 'react';
import './AddToCartBtn.css'

const AddToCartBtn = ({ addToCart, foodId, quantity }) => {

    return (
        <button
            onClick={() => addToCart(foodId, quantity)}
            className='btn add-to-cart-btn'
        >Add</button>
    );
};



export default AddToCartBtn;