import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFound: false,
  isOpen: false
};

export const inputFoundSlice = createSlice({
  name: 'inputFound',
  initialState,
  reducers: {
    setIsFound: (state, action) => {
      let stateCopy = state;
      if (action.payload !== stateCopy) {
        return action.payload;
      } else {
        return state;
      }
    },
  },
});

export const { setIsFound } = inputFoundSlice.actions;

// selector needed to access our global store's basket slice
export const selectFlagFromInputFoundSlice = (state) => state.inputFound;

export default inputFoundSlice.reducer;
