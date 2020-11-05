import React from 'react';
import AddToCartBtn from '../../../Common/AddToCartBtn/AddToCartBtn';
import './FoodItem.css'

const FoodItem = ({ food, addToCart }) => {
    const { _id, name, category, price, img, shotDescription, description } = food
    return (
        <div className='foodItem'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{shotDescription}</p>
            <h2>${price}</h2>
            <AddToCartBtn foodId={_id} addToCart={addToCart} />
        </div>
    );
};

export default FoodItem;