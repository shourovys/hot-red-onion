import React, { useEffect, useState } from 'react';
import './HandelQuantity.css'

const HandelQuantity = ({ quantity, setQuantity }) => {
    // useEffect(() => {
    //     getQuantity(quantity)
    // }, [quantity])

    return (
        <div className='HandelQuantity'>
            <p
                className='plus'
                onClick={() => setQuantity(quantity + 1)}
            >
                +
            </p>

            <p>{quantity}</p>

            <p
                className='minus'
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
            >
                -
            </p>
        </div>
    );
};

export default HandelQuantity;