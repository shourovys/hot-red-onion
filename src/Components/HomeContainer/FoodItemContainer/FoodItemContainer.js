import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction';
import FoodItemCard from './FoodItemCard/FoodItemCard';
import './FoodItemContainer.css';

const FoodItemContainer = ({ addToCart, category, cart, makeBtnActive,foodData }) => {
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
        cart: state.cart.cart,
        foodData:state.foodData.foodData
    }
}
const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemContainer);