/* This is the root reducer */
import { combineReducers } from "redux";

import userReducer from "./User/user-reducer";
import cartReducer from "./Cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
