import React from 'react'
import './CartDropdown.scss'
import { useNavigate } from 'react-router-dom'
import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '../button/Button'
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom"
import { InvertedButton } from '../button/Button.styles'


function CartDropdown() {
  const {setIsCartOpen, isCartOpen} = useContext(CartContext)
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </div>
     <InvertedButton onClick={goToCheckout}>CHECKOUT</InvertedButton>
    </div>
  )
}

export default CartDropdown