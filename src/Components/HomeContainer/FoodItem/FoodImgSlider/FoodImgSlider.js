import React from "react";
import { Link } from 'react-router-dom'
import './FoodImgSlider.css'
// import Carousel from "react-elastic-carousel";


const FoodImgSlider = ({ sameCategoryFood }) => {
    const breakPoints = [
        { width: 550, itemsToShow: 2, itemsToScroll: 2 }
    ];
    return (
        <div className="App">
            {/* <Carousel> */}
            {/* {
                    sameCategoryFood.map(food =>
                        <Link>
                            <img src={food.img} alt="" />
                        </Link>)
                } */}
            {/* </Carousel> */}
        </div>
    );
}
export default FoodImgSlider
