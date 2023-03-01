import React from 'react'
import './CartIcon.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container'>
      <ShopIcon onClick={toggleIsCartOpen()} className='shopping-icon'/>
      <span>0</span>
    </div>
  )
}

export default CartIcon