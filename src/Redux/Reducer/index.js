import { cartReducer } from './CartReducer'
import { foodDataReducer } from './FoodsDataReducer';
const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        cart: cartReducer,
        foodData: foodDataReducer
    }
)