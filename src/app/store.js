import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../redux/slices/basketSlice"
import stickyReducer from "../redux/slices/stickySlice"

// the global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    stickyFlag: stickyReducer
  },
});