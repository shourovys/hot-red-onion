import React from 'react';
import './AddToCartBtn.css'

const AddToCartBtn = (props) => {
    const { addToCart, foodId } = props
    console.log(props);
    return (
        <button
            onClick={() => addToCart(foodId)}
            className='btn add-to-cart-btn'
        >Add</button>
    );
};



export default AddToCartBtn;