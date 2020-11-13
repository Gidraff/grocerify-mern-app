import { combineReducers } from "redux";
import groceries from "./groceryReducer";

const rootReducer = combineReducers({
  groceries: groceries
});

export default rootReducer;
