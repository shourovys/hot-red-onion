import React from 'react';
import './AddToCartBtn.css'

const AddToCartBtn = ({ addToCart, quantity ,food}) => {

    return (
        <button
            onClick={() => addToCart(food, quantity)}
            className='btn add-to-cart-btn'
        >Add</button>
    );
};



export default AddToCartBtn;