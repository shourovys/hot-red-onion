import { cartReducer } from './CartReducer';
import { foodDataReducer } from './FoodsDataReducer';
import notificationsReducer from './notificationsReducer';
import orderReducer from './OrderReducer';
import { ShareFunctionReducer } from './ShareFunctionReducer';
import { userInfoReducer } from './UserInfoReducer';
const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        cart: cartReducer,
        foodsData: foodDataReducer,
        userInfo: userInfoReducer,
        shareFunction:ShareFunctionReducer,
        ordersData:orderReducer,
        notifications:notificationsReducer
    }
)