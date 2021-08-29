import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../redux/slices/basketSlice"
import stickyReducer from "../redux/slices/stickySlice"
import inputFoundReducer from "../redux/slices/inputFoundSlice"
import optionsBasketReducer from "../redux/slices/optionsBasketSlice";

// the global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    stickyFlag: stickyReducer,
    inputFound: inputFoundReducer,
    optionsBasket: optionsBasketReducer,
  },
});