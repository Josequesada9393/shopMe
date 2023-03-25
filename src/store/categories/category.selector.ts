import { createSelector } from 'reselect'
import { RootState } from '../store';
import { categoryState, CategoryArray, CategoryItem } from './category.reducer';


//memoized selectors, go through them again later
const selectCategoryReducer = (state:RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc:{ [key: string]: CategoryItem[] }, category:CategoryArray) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
 }, {})
)



export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)