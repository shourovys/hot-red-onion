import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../../fakeData';
import FoodItem from './FoodItem/FoodItem';
import './FoodItemContainer.css'

const FoodItemContainer = () => {
    const { category } = useParams()
    const [currentCategoryFoods, setCurrentCategoryFoods] = useState([])

    useEffect(() => {
        setCurrentCategoryFoods(foodData.filter(item => item.category === category))
    }, [category])


    return (
        <div className='FoodItemContainer'>
            {
                currentCategoryFoods.map(food => <FoodItem key={food._id} food={food} />)
            }
        </div>
    );
};

export default FoodItemContainer;