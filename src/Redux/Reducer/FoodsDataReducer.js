import { GET_FOOD_ITEM_DATA, GET_SAME_CATEGORY_FOODS_DATA, SET_ALL_FOOD_ITEMS_DATA } from '../Action/FoodsDataAction';
const foodDataState = {
    foodData: [],
    foodItemData: {},
    sameCategoryFood: []
}


export const foodDataReducer = (state = foodDataState, action) => {

    switch (action.type) {
        case SET_ALL_FOOD_ITEMS_DATA:
            return {
                ...state,
                foodData:action.allFoodData
            }
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