import React from 'react';
import './AddToCartBtn.css'

const AddToCartBtn = ({ addToCart, foodId }) => {

    return (
        <button
            onClick={() => addToCart(foodId)}
            className='btn add-to-cart-btn'
        >Add</button>
    );
};



export default AddToCartBtn;