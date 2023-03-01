import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../Utils/Firebase/firebase.js";

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {products}
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}



//I created this use effect under products and set products to copy my local data into my firebase cloud storage,
// I  ran it once and then deleted it
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, [])