import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'test1',
      description: 'description of test 1.',
    },
    {
      id: 2,
      name: 'test2',
      description: 'description of test 2.',
    },
  ],
};

export const basketSlice = createSlice({
  name: 'basket',
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

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selector needed to access our global store's basket slice
export const selectItemsFromBasket = (state) => state.basket.items;

export default basketSlice.reducer;
