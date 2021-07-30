import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICategory {
  id: number;
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
    {
      id: 1,
      title: 'Electronics',
      color: '#FE8668',
      img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/iphone.png?alt=media&token=aa45bac6-effe-4061-a4a9-56932d4dab00',
      linkUrl: '/electronics',
    },
    {
      id: 2,
      title: 'Gaming',
      color: '#30D6B0',
      img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/gaming.png?alt=media&token=fbb34afd-9887-4bfc-9963-4b451341362a',
      linkUrl: '/gaming',
    },
    {
      id: 3,
      title: 'Fashion',
      color: '#4269F2',
      img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Fashion%2008.png?alt=media&token=6479e1a7-2a4b-4b32-bb59-1c1f8de5eb48',
      linkUrl: '/fashion',
    },
    {
      id: 4,
      title: 'Education',
      color: '#FDBC1F',
      img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Book%2003.png?alt=media&token=309dc29c-e299-4486-a5b5-34b9eb520a40',
      linkUrl: '/education',
    },
    {
      id: 5,
      title: 'Music',
      color: '#FE8668',
      img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/bose-headset.png?alt=media&token=e48e092d-fc36-48f1-b40d-b9b73c605b4e',
      linkUrl: '/music',
    },
  ],
};

export const directorySlice = createSlice({
  name: 'directory',
  initialState: INITIAL_DIRECTORY,
  reducers: {},
});

export const selectCategories = (state: RootState) => state.directory.categories;
export default directorySlice.reducer;
