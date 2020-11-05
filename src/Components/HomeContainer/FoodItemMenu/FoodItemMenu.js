import React, { useState } from 'react';
import './FoodItemMenu.css'
import FoodItemContainer from '../FoodItemContainer/FoodItemContainer';
import SquareBtn from '../../Common/SquareBtn/SquareBtn';



const FoodItemMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const makeBtnActive = status => setIsActive(status)

    const [category, setCategory] = useState('lunch')
    const selectedMenu = categoryName => category === categoryName ? 'selected menuItem' : 'menuItem'

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
            <FoodItemContainer category={category} makeBtnActive={makeBtnActive} />
            <SquareBtn
                isActive={isActive}
                path='/order'
            >
                Checkout your foods
            </SquareBtn>
        </div>
    );
};

export default FoodItemMenu;