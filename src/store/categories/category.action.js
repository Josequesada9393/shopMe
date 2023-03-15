import  {CATEGORIES_ACTION_TYPES}  from "./category.types";
import { createAction } from "../../Utils/Firebase/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/firebase";



export const fetchCategoriesStart = () =>
 createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)


export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray)

export const fetchCategoriesFAILED = (error) => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    error)



export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
     dispatch(fetchCategoriesStart())
    try {
      const categoriesArray = await getCategoriesAndDocuments()
       dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
      dispatch(fetchCategoriesFAILED(error))
    }
  }
}