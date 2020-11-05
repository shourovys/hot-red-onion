import React from 'react';
import FoodItemMenu from '../FoodItemMenu/FoodItemMenu';
import Search from '../Search/Search';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Search />
            <FoodItemMenu />

        </div>
    );
};

export default Home;