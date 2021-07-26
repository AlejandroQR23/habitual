import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../shop/shop-data';

export interface ICart {
  hidden: boolean;
  cartItems: IProduct[];
}

export const INITIAL_CART: ICart = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_CART,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleCartHidden } = cartSlice.actions;
export default cartSlice.reducer;
