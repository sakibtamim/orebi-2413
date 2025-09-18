import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartDetails")) || [],
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
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },
  },
});

export const { cartTotal } = cartSlice.actions;

export default cartSlice.reducer;
