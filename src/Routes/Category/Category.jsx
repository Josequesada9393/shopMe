import './Category.scss'
import { useParams } from 'react-router-dom';
import {  useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import React from 'react'
import { selectCategoriesMap } from '../../store/categories/category.selector';

function Category() {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)

  console.log('giveme ever', categoriesMap)

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])


  return (
    <Fragment>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {
          products &&
          products.map((product) =>
           <ProductCard key={product.id} product={product} />)
    }
      </div>
      </Fragment>
  )
}

export default Category