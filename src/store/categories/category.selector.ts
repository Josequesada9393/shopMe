import { createSelector } from 'reselect'
import { RootState } from '../store';
import { categoryState, Category, CategoryItem } from './category.reducer';

interface SelectCategoryReducerState extends RootState {
  categories: categoryState;
}
//memoized selectors, go through them again later
const selectCategoryReducer = (state:SelectCategoryReducerState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc:{ [key: string]: CategoryItem[] }, category:Category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
 }, {})
)



export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)