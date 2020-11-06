import foodData from '../../fakeData'
import { GET_FOODS_DATA, GET_FOOD_ITEM_DATA } from '../Action/FoodsDataAction';
const foodDataState = {
    foodData: foodData,
    foodItemData: {}
}


export const foodDataReducer = (state = foodDataState, action) => {
    switch (action.type) {
        // case GET_FOODS_DATA:
        //     return {
        //         foodData: state.foodData
        //     }
        case GET_FOOD_ITEM_DATA:
            return {
                ...state,
                foodItemData: state.foodData.find(food => food._id === action.foodId)
            }

        default:
            return state
    }
}