import { combineReducers } from "redux";
import carritoReducer from "./carritoReducer";
import productosReducer from "./productosReducer"

const reducer = combineReducers({
    carritoReducer,
    productosReducer
})


export default reducer