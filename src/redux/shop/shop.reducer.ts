import { SHOP_DATA } from './shop-data';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { useAppSelector } from '../hooks';
// import { ICategory } from '../directory/directory.reducer';

export const INITIAL_SHOP = {
  categories: SHOP_DATA,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState: INITIAL_SHOP,
  reducers: {},
});

// * Selectors
export const selectShopCategories = (state: RootState) => state.shop.categories;

export const selectCategory = (categoryId: string) => {
  const categories = useAppSelector(selectShopCategories);
  return categories[categoryId];
};

export const selectDiscountShopItems = (state: RootState) =>
  state.shop.categories.misc.products.filter((item) => item.discount > 0);

// * Reducer
export default shopSlice.reducer;
