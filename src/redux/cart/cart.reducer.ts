import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../shop/shop-data';
import { RootState } from '../store';

interface ICartItem extends IProduct {
  quantity: number;
}
export interface ICart {
  hidden: boolean;
  cartItems: ICartItem[];
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

// * Selectors
export const selectCartItemsCount = (state: RootState) =>
  state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
    0,
  );
// * Actions
export const { toggleCartHidden } = cartSlice.actions;

// * Reducer
export default cartSlice.reducer;
