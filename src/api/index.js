import axios from 'axios'

const url = 'http://localhost:4000'

export const addProduct=(foodData)=>axios.post(`${url}/foodItem/add`,foodData)
export const fetchProducts=()=>axios.get(`${url}/foodItem/all`)
export const getSignalFood=(foodId)=>axios.get(`${url}/foodItem/${foodId}`)
export const getSameCategoryFoods=(category)=>axios.get(`${url}/foodItem/same/${category}`)

//all order api call hear
export const create=(orderInfo)=>axios.post(`${url}/order/add`,orderInfo)
export const currentOrders=(userEmail)=>axios.get(`${url}/order/current/${userEmail}`)
export const priviesOrders=(userEmail)=>axios.get(`${url}/order/privies/${userEmail}`)
export const allOrders=()=>axios.get(`${url}/order/all`)
export const allPriviesOrders=()=>axios.get(`${url}/order/privies/all`)
export const updateOrderStatus=(id,activeStep)=>axios.patch(`${url}/order/${id}/${activeStep}`)

//admin
export const isThisAdmin=(userEmail)=>axios.get(`${url}/admin/find/${userEmail}`)
export const makeAdmin=(adminEmail,email)=>axios.post(`${url}/admin/add/${adminEmail}`,email)
