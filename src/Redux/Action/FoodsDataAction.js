export const GET_FOOD_ITEM_DATA = 'GET_FOOD_ITEM_DATA'
export const GET_SAME_CATEGORY_FOODS_DATA = 'GET_SAME_CATEGORY_FOODS_DATA'



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