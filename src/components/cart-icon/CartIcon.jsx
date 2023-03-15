import React from 'react'
import {ShoppingIcon, IconContainer, ItemCount} from './CartIcon.styles.jsx'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';


function CartIcon() {

  const { quantity } = useContext(CartContext);

    const isCartOpen = useSelector(selectIsCartOpen)

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