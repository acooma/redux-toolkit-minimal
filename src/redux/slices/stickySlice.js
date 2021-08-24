import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const stickySlice = createSlice({
  name: 'stickyFlag',
  initialState,
  reducers: {
    setStickyFlag: (state, action) => {
      let stateCopy = state;
      if (action.payload !== stateCopy) {
        return action.payload;
      } else {
        return state;
      }
    },
  },
});

export const { setStickyFlag } = stickySlice.actions;

// selector needed to access our global store's basket slice
export const selectItemsFromStickySlice = (state) => state.stickyFlag;

export default stickySlice.reducer;
