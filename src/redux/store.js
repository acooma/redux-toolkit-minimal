import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./slices/basketSlice"
import stickyReducer from "./slices/stickySlice"

// the global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    stickyFlag: stickyReducer,
  },
});