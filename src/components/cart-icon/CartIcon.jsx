import React from 'react'
import './CartIcon.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {

  const { isCartOpen, setIsCartOpen, quantity } = useContext(CartContext);




  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
    console.log(quantity, 'quaaaantity')


  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
      <ShopIcon  className='shopping-icon'/>
      <span>{quantity}</span>
    </div>
  )
}

export default CartIcon