import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './shop.styles.scss'
function Shop() {
  const { products } = useContext(ProductsContext)
  console.log('products', products)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
    </div>
  )
}

export default Shop