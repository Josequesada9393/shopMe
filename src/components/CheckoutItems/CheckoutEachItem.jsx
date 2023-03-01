import React from 'react'


function CheckoutEachItem({ item }) {
  const {name, price, imageUrl, quantity} = item
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>Product {name}</h2>
      <h2>Price {price}</h2>
      <span>-</span><h2>Quantity {quantity}</h2><span>+</span>
    </div>

  )
}

export default CheckoutEachItem