import React from 'react'
import { Fragment } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import CategoryPreview from '../../components/categoryPreview/CategoryPreview'
import './shop.styles.scss'

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log('products', categoriesMap)
  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={title} title={title} products={products} />

      })}
    </div>
  )
}

export default Shop