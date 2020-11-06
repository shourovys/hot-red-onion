import { Link } from 'react-router-dom';
import React from 'react';
import AddToCartBtn from '../../../Common/AddToCartBtn/AddToCartBtn';
import './FoodItemCard.css'

const FoodItem = ({ food, addToCart }) => {
    const { _id, name, category, price, img, shotDescription, description } = food
    return (
        <div className='foodItem'>
            <Link to={'/food/' + _id} className='foodItemInfo'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{shotDescription}</p>
                <h2>${price}</h2>
            </Link>
            <AddToCartBtn foodId={_id} addToCart={addToCart} />
        </div>
    );
};

export default FoodItem;