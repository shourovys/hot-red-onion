import { GET_FOOD_ITEM_DATA, SET_ALL_FOOD_ITEMS_DATA } from '../Action/FoodsDataAction';

const foodData = {
    foodsData: [],
    thisFoodData: {}
}


export const foodDataReducer = (state = foodData, action) => {

    switch (action.type) {
        case SET_ALL_FOOD_ITEMS_DATA:
            return {
                ...state,
                foodsData: action.payload
            }

        case GET_FOOD_ITEM_DATA:
            return {
                ...state,
                thisFoodData:  action.payload
            }
        // case GET_SAME_CATEGORY_FOODS_DATA:
        //     return {
        //         ...state,
        //         sameCategoryFood: state.foodData.filter(food => food.category === action.category && food._id !== action.thisFoodId)
        //     }
        default:
            return state
    }
}