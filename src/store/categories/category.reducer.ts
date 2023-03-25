import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CategoryItem = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type Category = {
  title: string,
  imageUrl: string,
  items: CategoryItem[],
}

export interface categoryState {
  categories: Category[],
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
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
