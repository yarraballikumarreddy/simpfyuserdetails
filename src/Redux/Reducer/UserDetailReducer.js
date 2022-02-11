/** @format */

import {
  USER_DETAILS,
  EDIT_USER_DETAILS,
} from "./../Actions/index";
export default (state = [], action) => {
  switch (action.type) {
    case USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
