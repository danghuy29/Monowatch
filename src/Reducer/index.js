import cartReducer from "./Cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart:cartReducer,
})

export default rootReducer