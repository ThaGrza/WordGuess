import themeReducer from "./theme";
import guessedReducer from "./guessed";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    themeReducer,
    guessedReducer
})

export default allReducers; 