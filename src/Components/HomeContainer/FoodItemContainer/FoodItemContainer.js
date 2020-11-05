import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../../fakeData';
import FoodItem from './FoodItem/FoodItem';
import './FoodItemContainer.css'
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction'

const FoodItemContainer = ({ addToCart, category, cart, makeBtnActive }) => {
    const [currentCategoryFoods, setCurrentCategoryFoods] = useState([])

    useEffect(() => {
        setCurrentCategoryFoods(foodData.filter(item => item.category === category))
    }, [category])

    makeBtnActive(cart.length > 0)
    return (
        <div className='FoodItemContainer'>
            {
                currentCategoryFoods.map(food =>
                    <FoodItem
                        key={food._id}
                        food={food}
                        addToCart={addToCart}
                    />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemContainer);