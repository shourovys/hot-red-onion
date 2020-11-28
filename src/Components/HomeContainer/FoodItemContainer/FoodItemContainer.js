import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction';
import FoodItemCard from './FoodItemCard/FoodItemCard';
import './FoodItemContainer.css';

const FoodItemContainer = ({ addToCart, category, cart, makeBtnActive,foodsData }) => {

    const [currentCategoryFoods, setCurrentCategoryFoods] = useState([])


    useEffect(() => {
        setCurrentCategoryFoods(foodsData.filter(item => item.category === category))
    }, [category,foodsData])

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
        foodsData:state.foodsData.foodsData
    }
}
const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemContainer);