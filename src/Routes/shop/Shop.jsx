import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../Category/Category'
import './shop.styles.scss'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/firebase'
import { setCategoriesMap } from '../../store/categories/category.action'
import {useDispatch} from 'react-redux'
function Shop() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop