import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICategory {
  id?: number;
  title: string;
  color: string;
  img?: string;
  linkUrl: string;
}

export interface IDirectory {
  categories: ICategory[];
}

export const INITIAL_DIRECTORY: IDirectory = {
  categories: [
    { id: 1, title: 'Electronics', color: '#FE8668', img: '../../assets/bose-headset.png', linkUrl: '/electronics' },
    { id: 2, title: 'Gaming', color: '#30D6B0', img: '../../assets/bose-headset.png', linkUrl: '/gaming' },
    { id: 3, title: 'Fashion', color: '#4269F2', img: '../../assets/bose-headset.png', linkUrl: '/fashion' },
    { id: 4, title: 'Education', color: '#FDBC1F', img: '../../assets/bose-headset.png', linkUrl: '/education' },
    { id: 5, title: 'Music', color: '#FE8668', img: '../../assets/bose-headset.png', linkUrl: '/music' },
  ],
};

export const directorySlice = createSlice({
  name: 'directory',
  initialState: INITIAL_DIRECTORY,
  reducers: {},
});

export const selectDirectory = (state: RootState) => state.directory.categories;
export default directorySlice.reducer;
