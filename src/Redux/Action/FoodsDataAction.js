export const GET_FOODS_DATA = 'GET_FOODS_DATA'
export const GET_FOOD_ITEM_DATA = 'GET_FOOD_ITEM_DATA'


// export const getFoodsData = () => {
//     return {
//         type: GET_FOODS_DATA
//     }
// }
export const getFoodItemData = foodId => {
    return {
        type: GET_FOOD_ITEM_DATA,
        foodId: foodId
    }
}