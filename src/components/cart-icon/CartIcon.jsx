import React from 'react'
import {ShoppingIcon, IconContainer, ItemCount} from './CartIcon.styles.jsx'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {

  const { isCartOpen, setIsCartOpen, quantity } = useContext(CartContext);


  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{quantity}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon