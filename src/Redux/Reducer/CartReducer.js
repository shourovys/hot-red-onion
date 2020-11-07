import { ADD_TO_CART, REMOVE_FORM_CART } from "../Action/CartAction";

const cartState = {
    cart: []
}

export const cartReducer = (state = cartState, action) => {

    const { cart } = state;
    switch (action.type) {
        case ADD_TO_CART:
            const sameProduct = state.cart.find(food => food.id === action.foodId);
            console.log('same', sameProduct)
            let newCart;
            if (sameProduct) {
                sameProduct.quantity = sameProduct.quantity + action.quantity;
                const others = cart.filter(pd => pd.id !== action.foodId);
                newCart = [...others, sameProduct];
            }
            else {
                const newObj = {
                    id: action.foodId,
                    quantity: action.quantity,
                }
                newCart = [...cart, newObj];
            }
            return {
                cart: newCart
            }

        case REMOVE_FORM_CART:
            return {
                cart: state.cart.filter(cartId => cartId !== action.foodId)
            }

        default:
            return state
    }
}

 // const sameProduct = cart.find(cartFood => {
        //     return cartFood.Id === action.FoodId
        //     // return toString(action.foodId) === toString(cartFood.Id)
        // })
        // if (sameProduct === true) {
        //     const otherProduct = state.cart.filter(cartFood => cartFood.id !== action.foodId)
        //     sameProduct.quantity += action.quantity
        //     return {
        //         cart: [...otherProduct, sameProduct]
        //     }
        // }
        // else {
        //     return {
        //         cart: [...state.cart, { id: action.foodId, quantity: action.quantity }]
        //     }
        // }