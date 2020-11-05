import { createStore } from "redux";
import { cartReducer } from "../Reducer/CartReducer";

export const store = createStore(cartReducer)