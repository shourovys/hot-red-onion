import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './FoodImgSlider.scss';

const FoodImgSlider = ({ sameCategoryFood }) => {
    const [index, setIndex] = useState(0)
    const handelIndexBack = () => {
        setIndex(index > 0 ? index - 2 : sameCategoryFood.length - 2)

    }
    const handelIndexForward = () => {
        setIndex(index < sameCategoryFood.length - 2 ? index + 2 : 0)
    }


    return (
        <div className="FoodImgSlider">
            <button onClick={handelIndexBack}> <ArrowBackIosIcon /> </button>
            <Link>
                <img className="FoodImgSliderImg" src={sameCategoryFood[index].img} alt={index} />
            </Link>
            <Link>
                <img className="FoodImgSliderImg" src={sameCategoryFood[index + 1].img} alt={index + 1} />
            </Link>
            <button onClick={handelIndexForward}><ArrowForwardIosIcon /></button>
        </div>
    );
}
export default FoodImgSlider
