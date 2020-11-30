import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import './FoodImgSlider.scss';

const FoodImgSlider = ({ sameCategoryFood }) => {
const history= useHistory()
    const [index, setIndex] = useState(0)
    const handelIndexBack = () => {
        setIndex(index > 0 ? index - 2 : sameCategoryFood.length - 3)

    }
    const handelIndexForward = () => {
        setIndex(index < sameCategoryFood.length - 3 ? index + 2 : 0)
    }


    return (
        <div className="FoodImgSlider">
            <button onClick={handelIndexBack}> <ArrowBackIosIcon /> </button>
            <Link >
                <img 
                    className="FoodImgSliderImg" 
                    src={sameCategoryFood[index].img} 
                    alt={index} 
                    onClick={history.push(`/foo000d/${sameCategoryFood[index]._id}`)}
                    />
            </Link>
            <Link >
                <img 
                    className="FoodImgSliderImg" 
                    src={sameCategoryFood[index + 1].img} 
                    alt={index + 1} 
                    onClick={history.push(`/fo000od/${sameCategoryFood[index+ 1]._id}`)} 
                    />
            </Link>
            <button onClick={handelIndexForward}><ArrowForwardIosIcon /></button>
        </div>
    );
}
export default FoodImgSlider
