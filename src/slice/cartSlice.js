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
        if (state.cartItems[findIndex].cartQuantity < 10) {
          state.cartItems[findIndex].cartQuantity += 1;
        }
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
      // if (findIndex >= 0) {
      //   if (
      //     action.payload.increment &&
      //     state.cartItems[findIndex].cartQuantity < 10
      //   ) {
      //     state.cartItems[findIndex].cartQuantity += 1;
      //   } else if (
      //     action.payload.decrement &&
      //     state.cartItems[findIndex].cartQuantity > 1
      //   ) {
      //     state.cartItems[findIndex].cartQuantity -= 1;
      //   }
      // } else  {
      //   state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      // }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },
    cartQuantity: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );

      if (findIndex >= 0) {
        if (action.payload.increment) {
          if (state.cartItems[findIndex].cartQuantity < 10) {
            state.cartItems[findIndex].cartQuantity += 1;
          }
        } else if (
          action.payload.decrement &&
          state.cartItems[findIndex].cartQuantity > 1
        ) {
          state.cartItems[findIndex].cartQuantity -= 1;
        }
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },
  },
});

export const { cartTotal, cartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
