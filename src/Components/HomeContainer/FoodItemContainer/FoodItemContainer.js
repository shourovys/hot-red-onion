import React, { useEffect, useState } from 'react';
import foodData from '../../../fakeData';
import FoodItemCard from './FoodItemCard/FoodItemCard';
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
                    <FoodItemCard
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
        cart: state.cart.cart
    }
}
const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemContainer);