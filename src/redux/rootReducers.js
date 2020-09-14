import { combineReducers } from "redux";

//reducers
import uiReducer from "./ui/uiReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  ui: uiReducer,
  user: userReducer
});
