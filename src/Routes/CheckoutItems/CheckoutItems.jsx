import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutEachItem from './CheckoutEachItem';
import './CheckoutItems.scss'
function CheckoutItems() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)

  return (
    <div>
      <h4>image name quantity price remove</h4>
      {cartItems.map((item) => <CheckoutEachItem key={item.id} item={item}/>)}
    </div>
  )
}

export default CheckoutItems