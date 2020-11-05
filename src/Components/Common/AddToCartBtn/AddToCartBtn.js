import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction';
import './AddToCartBtn.css'

const AddToCartBtn = (props) => {
    const { addToCart, foodId } = props
    console.log(props);
    return (
        <button
            onClick={() => addToCart(foodId)}
            className='btn add-to-cart-btn'
        >Add</button>
    );
};

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn);