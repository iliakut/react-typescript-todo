import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  todoStore: todoReducer,
  filterStore: filterReducer,
});
