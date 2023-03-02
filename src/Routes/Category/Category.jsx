import './Category.scss'
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';

import React from 'react'

function Category() {
  const {category} = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <div className='category-container'>{
     products && products.map((product) => <ProductCard key={product.id} product={product} />)
    }
    </div>
  )
}

export default Category