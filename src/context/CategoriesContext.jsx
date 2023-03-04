import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utils/Firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
      getCategoriesMap()
  }, [])

  const value = {categoriesMap}
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}



//I created this use effect under products and set products to copy my local data into my firebase cloud storage,
// I  ran it once and then deleted it
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, [])