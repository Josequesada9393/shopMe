import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutEachItem from './CheckoutEachItem';
import './CheckoutItems.scss'
function CheckoutItems() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>

        </div>
        <div className='header-block'>
        <span>Quantity</span>

        </div>
        <div className='header-block'>
          <span>Price</span>

        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => <CheckoutEachItem key={item.id} item={item} />)}

      <span className='total'>Total: ${cartTotal} </span>
    </div>
  )
}

export default CheckoutItems