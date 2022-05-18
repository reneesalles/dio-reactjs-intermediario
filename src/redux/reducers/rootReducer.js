import { combineReducers } from "redux";
import { cientistasReducer } from "./cientistasReducer";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    cientistas: cientistasReducer
});

export default rootReducer;