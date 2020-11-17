export const SET_ALL_FOOD_ITEMS_DATA = 'GET_ALL_FOOD_ITEMS_DATA'
export const GET_FOOD_ITEM_DATA = 'GET_FOOD_ITEM_DATA'
export const GET_SAME_CATEGORY_FOODS_DATA = 'GET_SAME_CATEGORY_FOODS_DATA'



export const setAllFoodItemsData = (allFoodData) => {
    return {
        type: SET_ALL_FOOD_ITEMS_DATA,
        allFoodData:allFoodData
    }
}

export const getFoodItemData = foodId => {
    return {
        type: GET_FOOD_ITEM_DATA,
        foodId: foodId
    }
}
export const getSameCategoryFoodsData = (thisFoodId, category) => {
    return {
        type: GET_SAME_CATEGORY_FOODS_DATA,
        category: category,
        thisFoodId: thisFoodId
    }
}