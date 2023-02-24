import React from 'react'
import { useContext } from 'react'

import { ProductsContext } from '../../context/ProductsContext'

function Shop() {
  const { products } = useContext
  console.log('products', products)
  return (
    <div>
      {products.map(({name, id}) => (
        <div key={id}><h1>{name}</h1></div>
    ))}
    </div>
  )
}

export default Shop