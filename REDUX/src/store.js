import COUNTER from "./counter";
import { combineReducers } from "redux";

const Store =combineReducers({
    update:COUNTER
})
export default Store;