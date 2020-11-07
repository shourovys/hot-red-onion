import { cartReducer } from './CartReducer'
import { foodDataReducer } from './FoodsDataReducer';
import { userInfoReducer } from './UserInfoReducer';
const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        cart: cartReducer,
        foodData: foodDataReducer,
        userInfo: userInfoReducer
    }
)