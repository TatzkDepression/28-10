import { combineReducers } from "redux";
import { userReducer } from "./User";
import { spinnerReducer } from "./spinner";

export let rootReducer = combineReducers({
  userReducer,
  spinnerReducer,
});
