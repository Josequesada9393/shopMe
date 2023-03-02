import React from 'react'
import { Fragment } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './shop.styles.scss'

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log('products', categoriesMap)
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </Fragment>
        ))}
    </Fragment>
  )
}

export default Shop