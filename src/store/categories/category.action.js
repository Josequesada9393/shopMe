import  {CATEGORIES_ACTION_TYPES}  from "./category.types";

import { createAction } from "../../Utils/Firebase/reducer/reducer.utils";


export const setCategoriesMap = (categoriesMap) =>
createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORY_MAP, categoriesMap)