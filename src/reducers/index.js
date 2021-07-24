import counterReducer from "./theme";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer
})

export default allReducers;