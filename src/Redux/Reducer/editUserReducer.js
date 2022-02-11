/** @format */

import { EDIT_USER_DETAILS } from "./../Actions/index";
export default (state = false, action) => {
  switch (action.type) {
    case EDIT_USER_DETAILS:
      return  action.payload;  
    default:
      return state;
  }
};
