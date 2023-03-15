import React from 'react'
import {ShoppingIcon, IconContainer, ItemCount} from './CartIcon.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { useDispatch, useSelector } from 'react-redux';

function CartIcon() {

  const dispatch = useDispatch()

  const quantity = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{quantity}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon