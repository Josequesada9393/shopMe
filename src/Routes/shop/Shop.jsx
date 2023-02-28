import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'

function Shop() {
  const { products } = useContext(ProductsContext)
  console.log('products', products)
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
    </div>
  )
}

export default Shop