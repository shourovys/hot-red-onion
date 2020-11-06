import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../Redux/Action/CartAction';
import { getFoodItemData } from '../../../Redux/Action/FoodsDataAction';
import AddToCartBtn from '../../Common/AddToCartBtn/AddToCartBtn';
import './FoodItem.css'
const FoodItem = ({ getFoodItemData, foodItemData, addToCart }) => {
    const { foodId } = useParams()
    useEffect(() => {
        getFoodItemData(foodId)
    }, [foodId])
    const { _id, name, category, price, img, description } = foodItemData;
    return (
        <div className='FoodItem tow_side_container'>
            <div className="left_side">
                <h1>{name}</h1>
                <AddToCartBtn addToCart={addToCart} />
            </div>
            <div className="right_side">
                <img src={img} alt="" />
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        foodItemData: state.foodData.foodItemData
    }
}
const mapDispatchToProps = { getFoodItemData, addToCart }


export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);