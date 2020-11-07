import foodData from '../../fakeData'
import { GET_SAME_CATEGORY_FOODS_DATA, GET_FOOD_ITEM_DATA } from '../Action/FoodsDataAction';
const foodDataState = {
    foodData: foodData,
    foodItemData: {},
    sameCategoryFood: []
}


export const foodDataReducer = (state = foodDataState, action) => {

    switch (action.type) {
        case GET_FOOD_ITEM_DATA:
            return {
                ...state,
                foodItemData: state.foodData.find(food => food._id === action.foodId)
            }
        case GET_SAME_CATEGORY_FOODS_DATA:
            return {
                ...state,
                sameCategoryFood: state.foodData.filter(food => food.category === action.category && food._id !== action.thisFoodId)
            }
        default:
            return state
    }
}