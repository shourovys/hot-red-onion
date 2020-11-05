export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FORM_CART = 'REMOVE_FORM_CART'


export const addToCart = foodId => {
    return {
        type: ADD_TO_CART,
        foodId: foodId
    }
}
export const removeFormCart = foodId => {
    return {
        type: REMOVE_FORM_CART,
        foodId: foodId
    }
}