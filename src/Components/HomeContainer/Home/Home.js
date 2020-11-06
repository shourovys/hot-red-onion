import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FoodItemMenu from '../FoodItemMenu/FoodItemMenu';
import Search from '../Search/Search';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Search />
            <FoodItemMenu />
            <ChooseUs />
        </div>
    );
};

export default Home;