import React from 'react';

const OrderedPrice = ({cart}) => {
    const makeTowDigit=num=>Math.round(num)
    const totalQuantity=cart.reduce((total,current)=>total+=current.quantity,0)
    const subtotal=cart.reduce((total,current)=>total+=Number(current.price)*Number(current.quantity),0)

    const tex =subtotal/5;
    const fee=2
    const total = subtotal+tex+fee

    return (
        <div className="price-section">
            <div>
                <samp>Subtotal * {totalQuantity} item</samp>
                <span>${makeTowDigit(subtotal)}</span>
            </div>
            <div>
                <samp>Tex</samp>
                <span>${makeTowDigit(tex)}</span>
            </div>
            <div>
                <samp>Delivery fee</samp>
                <span>${fee}</span>
            </div>
            <div>
                <samp>Total</samp>
                <span>${makeTowDigit(total)}</span>
            </div>
        </div>
    );
};

export default OrderedPrice;