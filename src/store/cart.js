import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
  items: {},
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {

    addToCart(state, item) {
      const itemId = item.payload.itemId;
      console.log('on ajoute un item:', item.payload);
      if (itemId in state.items) {
        state.items[itemId].nb++
        state.items[itemId].item.quantity++
      } else {
        state.items[itemId] =  { item: item.payload, nb: 1 }
      }
    },

    removeItem(state, itemPayload) {
      const itemId = itemPayload.payload;

      if (itemId in state.items) {
        if (state.items[itemId].nb > 1) {
          state.items[itemId].nb--;
          state.items[itemId].item.quantity--
        } else {
          delete state.items[itemId];
        }
      }
    },
  }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;