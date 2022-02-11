/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./Redux/Reducer/index";
import axios from "axios"

export default () => {
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios)))
  );
  return store;
};
