import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};

export const optionsBasket = createSlice({
  name: 'optionsBasket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        // The item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
      }

      //SET items in global store = basket with item removed
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = optionsBasket.actions;

// selector needed to access our global store's basket slice
export const selectOptionsBasket = (state) => state.optionsBasket;

export default optionsBasket.reducer;
