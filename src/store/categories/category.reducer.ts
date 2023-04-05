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

export type Category = {
  title: string,
  imageUrl: string,
  items: CategoryItem[],
}

export type CategoryMap = {
  [key: string]: CategoryItem[]
}
export interface categoryState {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE:categoryState = {
  categories: [],
  isLoading: false,
  error: null
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
