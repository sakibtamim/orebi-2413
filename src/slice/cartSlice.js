import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    cartTotal: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findIndex >= 0) {
        state.cartItems[findIndex].cartQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
    },
  },
});

export const { cartTotal } = cartSlice.actions;

export default cartSlice.reducer;
