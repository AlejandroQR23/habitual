import { SHOP_DATA } from './shop-data';
import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../store';

export const INITIAL_SHOP = {
  categories: SHOP_DATA,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState: INITIAL_SHOP,
  reducers: {},
});

// export const selectShop = (state: RootState) => state.shop.categories;
export default shopSlice.reducer;
