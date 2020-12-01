import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction';
import SkeletonCard from '../../Skeleton/SkeletonCard/SkeletonCard';
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
                currentCategoryFoods.length>0

                ?currentCategoryFoods.map(food =>
                    <FoodItemCard
                        key={food._id}
                        food={food}
                        addToCart={addToCart}
                    />)
                :[1,2,3,4,5,6].map(n=><SkeletonCard key={n}/>)
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