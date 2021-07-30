import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../shop/shop-data';
import { RootState } from '../store';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export interface ICartItem extends IProduct {
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
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },

    removeItem: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

// * Selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
    0,
  );
// * Actions
export const { toggleCartHidden, addItem } = cartSlice.actions;

// * Reducer
export default cartSlice.reducer;
