import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: 0,
  },
  reducers: {
    increment: (state) => {
      console.log(state, "state");
    },
  },
});

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;
