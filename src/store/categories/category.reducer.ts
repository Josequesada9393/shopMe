import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export type CategoryItem = {
  id: number,
  imageUrl: string,
  name: string,
   price: number,
  quantity: number
}

export type CategoryArray = {
  title: string,
  imageUrl: string,
  items: CategoryItem[],
}

export interface categoryState {
  categories: CategoryArray[],
  isLoading: boolean
}

export const CATEGORIES_INITIAL_STATE:categoryState = {
  categories: [],
  isLoading: false
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action:PayloadAction<CategoryArray[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;