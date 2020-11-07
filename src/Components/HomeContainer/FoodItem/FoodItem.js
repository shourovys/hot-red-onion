import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../Redux/Action/CartAction';
import { getFoodItemData, getSameCategoryFoodsData } from '../../../Redux/Action/FoodsDataAction';
import AddToCartBtn from '../../Common/AddToCartBtn/AddToCartBtn';
import HandelQuantity from '../../Common/HandelQuantity/HandelQuantity';
import FoodImgSlider from './FoodImgSlider/FoodImgSlider';
import './FoodItem.css'
const FoodItem = ({ getFoodItemData, foodItemData, addToCart, sameCategoryFood, getSameCategoryFoodsData }) => {
    const { foodId } = useParams()
    const { _id, name, category, price, img, description } = foodItemData;

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        getFoodItemData(foodId)
    }, [foodId])
    useEffect(() => {
        getSameCategoryFoodsData(foodId, category)
    }, [_id])


    // vai sameCategoryFood kano bar bar call hoi quantity update hola
    // console.log(sameCategoryFood);

    return (
        <div className='FoodItem'>
            <div className=' tow_side_container'>
                <div className="FoodItemInfo left_side">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="price_quantity">
                        <h1>${price}</h1>
                        <HandelQuantity quantity={quantity} setQuantity={setQuantity} />
                    </div>
                    <AddToCartBtn addToCart={addToCart} foodId={foodId} quantity={quantity} />
                </div>
                <div className="right_side bigImg">
                    <img src={img} alt="" />
                </div>
            </div>
            {

                sameCategoryFood.length > 0 &&
                <FoodImgSlider sameCategoryFood={sameCategoryFood} />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        foodItemData: state.foodData.foodItemData,
        sameCategoryFood: state.foodData.sameCategoryFood
    }
}
const mapDispatchToProps = { getFoodItemData, addToCart, getSameCategoryFoodsData }


export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);