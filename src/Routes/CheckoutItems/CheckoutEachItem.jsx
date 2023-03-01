import React from 'react'
import './CheckoutEachItem.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CheckoutEachItem({ item }) {
  const { name, price, imageUrl, quantity } = item;
  const {addItemToCart, removeItemToCart} = useContext(CartContext)
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>Product {name}</h2>
      <h2>Price {price}</h2>
      <span onClick={() => removeItemToCart(item)}>-Dec</span><h2>Quantity {quantity}</h2><span onClick={() => addItemToCart(item)}>+Inc</span>
    </div>

  )
}

export default CheckoutEachItem