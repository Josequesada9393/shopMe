import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutEachItem from './CheckoutEachItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import PaymentForms from '../../components/PaymentForm/PaymentForms';

import './CheckoutItems.scss'
function CheckoutItems() {

  const cartTotal = useSelector(selectCartTotal)
  const cartItems = useSelector(selectCartItems)


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
      <PaymentForms/>
    </div>
  )
}

export default CheckoutItems