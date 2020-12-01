import * as api from '../../api'
export const SET_ALL_FOOD_ITEMS_DATA = 'SET_ALL_FOOD_ITEMS_DATA'
export const GET_FOOD_ITEM_DATA = 'GET_FOOD_ITEM_DATA'
export const GET_SAME_CATEGORY_FOODS_DATA = 'GET_SAME_CATEGORY_FOODS_DATA'



// export const addProduct = (foodData) => async (dispatch)=> {
//     try {
//         const {data}= await api.fetchProducts(foodData)

//         // dispatch({type:SET_ALL_FOOD_ITEMS_DATA, payload:data})
//     } catch (error) {
//     console.log( error)
        
//     }
// }

export const fetchAllProduct = () => async (dispatch)=> {
    try {
        const {data}= await api.fetchProducts()

        dispatch({type:SET_ALL_FOOD_ITEMS_DATA, payload:data})
    } catch (error) {
    console.log("🚀 ~ file: FoodsDataAction.js ~ line 15 ~ fetchAllProduct ~ error", error)
        
    }
}

export const getFoodItemData = foodId => async (dispatch)=> {
    const {data}=await api.getSignalFood(foodId)

   dispatch({
        type: GET_FOOD_ITEM_DATA,
        payload: data
    })
}
export const getSameCategoryFoodsData = (thisFoodId, category) => {
    return {
        type: GET_SAME_CATEGORY_FOODS_DATA,
        category: category,
        thisFoodId: thisFoodId
    }
}