import * as api from '../../api'

export const ADD_CURRENT_ORDER = 'ADD_CURRENT_ORDER'
export const ADD_CURRENT_ORDERS = 'ADD_CURRENT_ORDERS'
export const ADD_PRIVIES_ORDERS = 'ADD_PRIVIES_ORDERS'
export const ADD_ALL_ORDERS = 'ADD_ALL_ORDERS'
export const ADD_ALL_PRIVIES_ORDERS = 'ADD_ALL_PRIVIES_ORDERS'
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS'

export const createOrder = (orderInfo) => async (dispatch) => {
	const { data } = await api.create(orderInfo)
	console.log('🚀 ~ file: OrderAction.js ~ line 11 ~ createOrder ~ data', data)
	dispatch({ type: ADD_CURRENT_ORDERS, payload: [data] })
}

export const fetchCurrentOrders = (userEmail) => async (dispatch) => {
	const { data } = await api.currentOrders(userEmail)
	console.log(
		'🚀 ~ file: OrderAction.js ~ line 12 ~ fetchCurrentOrders ~ data',
		data
	)

	dispatch({ type: ADD_CURRENT_ORDERS, payload: data })
}

export const fetchPriviesOrders = (userEmail) => async (dispatch) => {
	const { data } = await api.priviesOrders(userEmail)
	console.log(
		'🚀 ~ file: OrderAction.js ~ line 19 ~ fetchPriviesOrders ~ data',
		data
	)

	dispatch({ type: ADD_PRIVIES_ORDERS, payload: data })
}

export const fetchAllOrders = () => async (dispatch) => {
	const { data } = await api.allOrders()
	console.log(
		'🚀 ~ file: OrderAction.js ~ line 27 ~ fetchAllOrders ~ data',
		data
	)

	dispatch({ type: ADD_ALL_ORDERS, payload: data })
}

export const fetchAllPriviesOrders = () => async (dispatch) => {
	const { data } = await api.allPriviesOrders()

	dispatch({ type: ADD_ALL_PRIVIES_ORDERS, payload: data })
}
