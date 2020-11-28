import axios from 'axios'

const url = 'http://localhost:4000'

export const fetchProducts=()=>axios.get(`${url}/foodItem/all`)
export const getSignalFood=(foodId)=>axios.get(`${url}/foodItem/${foodId}`)
export const getSameCategoryFoods=(category)=>axios.get(`${url}/foodItem/same/${category}`)