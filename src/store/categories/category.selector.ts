import { createSelector } from 'reselect'
import { RootState } from '../store';
import { categoryState, Category, CategoryItem, CategoryMap } from './category.reducer';


//memoized selectors, go through them again later
const selectCategoryReducer = (state:RootState):categoryState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories):CategoryMap => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
 }, {} as CategoryMap)
)



export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)