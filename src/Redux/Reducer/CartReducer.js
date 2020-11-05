import { ADD_TO_CART, REMOVE_FORM_CART } from "../Action/CartAction";


const cartState = {
    cart: []
}

export const cartReducer = (state = cartState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.foodId]
            }
        case REMOVE_FORM_CART:
            return {
                cart: state.cart.filter(cartId => cartId !== action.foodId)
            }
        default:
            return state
    }
}