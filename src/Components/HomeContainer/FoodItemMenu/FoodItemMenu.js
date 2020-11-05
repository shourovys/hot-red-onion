import React, { useState } from 'react';
import './FoodItemMenu.css'
import FoodItemContainer from '../FoodItemContainer/FoodItemContainer';



const FoodItemMenu = () => {
    const [category, setCategory] = useState('lunch')
    const selectedMenu = (categoryName) => {
        if (category === categoryName) {
            return 'selected menuItem'
        }
        return 'menuItem'
    }
    return (
        <div className='FoodItemMenu'>
            <div className="foodMenuLink">
                <li
                    className={selectedMenu('breakfast')}
                    onClick={() => { setCategory('breakfast') }}
                >
                    Breakfast
                </li>

                <li
                    className={selectedMenu('lunch')}
                    onClick={() => { setCategory('lunch') }}
                >
                    Lunch
                </li>

                <li
                    className={selectedMenu('dinner')}
                    onClick={() => { setCategory('dinner') }}
                >
                    Dinner
                </li>
            </div>
            <FoodItemContainer category={category} />
        </div>
    );
};

export default FoodItemMenu;