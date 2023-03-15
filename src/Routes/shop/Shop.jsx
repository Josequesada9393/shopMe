import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../Category/Category'
import './shop.styles.scss'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/firebase'
import { fetchCategoriesAsync } from '../../store/categories/category.action'
import {useDispatch} from 'react-redux'
function Shop() {

  const dispatch = useDispatch();

  //using redux thunk for async state
  useEffect(() => {
       dispatch(fetchCategoriesAsync());
  }, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop