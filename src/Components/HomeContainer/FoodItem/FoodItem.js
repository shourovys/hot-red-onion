import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSameCategoryFoods, getSignalFood } from '../../../api';
import { addToCart } from '../../../Redux/Action/CartAction';
import AddToCartBtn from '../../Common/AddToCartBtn/AddToCartBtn';
import HandelQuantity from '../../Common/HandelQuantity/HandelQuantity';
import FoodImgSlider from './FoodImgSlider/FoodImgSlider';
import './FoodItem.scss';
const FoodItem = () => {
    const dispatch = useDispatch()
    const { foodId } = useParams()

    const [thisFoodData, setThisFoodData] = useState({})
    const [sameCategory, setSameCategory] = useState([])


    useEffect( () => {
        async function fetchData () {
            const data=await getSignalFood(foodId)
            setThisFoodData(data.data)
        }
        fetchData()
    }, [foodId])

    const { _id, name, category, price, img, description } = thisFoodData;
    
    useEffect( () => {
        async function fetchData () {
            const sameFoods=await getSameCategoryFoods(category)
            setSameCategory(sameFoods.data.filter(food=>food._id!==_id))
        }
        category && fetchData()
    }, [thisFoodData])

    const [quantity, setQuantity] = useState(1)

    return (
        <div className='FoodItem'>
                <div className="FoodItemInfo left_side">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="price_quantity">
                        <h1>${price}</h1>
                        <HandelQuantity quantity={quantity} setQuantity={setQuantity} />
                    </div>
                    <AddToCartBtn addToCart={()=>dispatch(addToCart())} foodId={foodId} quantity={quantity} />
                    {

                        sameCategory.length > 0 &&
                        <FoodImgSlider sameCategoryFood={sameCategory} />
                    }
                </div>
                <div className="right_side bigImg">
                    <img src={img} alt="" />
                </div>
        </div>
    );
};


export default FoodItem;