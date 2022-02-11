/** @format */

import { combineReducers } from "redux";
import editUserReducer from "./editUserReducer";
import UserDetailReducer from "./UserDetailReducer";
export default combineReducers({
  userDetails: UserDetailReducer,
  isEditClicked: editUserReducer
});
