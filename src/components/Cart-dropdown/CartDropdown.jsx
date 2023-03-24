import React from 'react'
import { CartDropdownContainer, EmptyMessage, CartItems, ButtonCart} from './CartDropdownStyles.jsx'
import { useNavigate } from 'react-router-dom'
import {useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.reducer.js'


function CartDropdown() {

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }


  return (
    <CartDropdownContainer className='cart-dropdown-container'>
      <CartItems className='cart-items'>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        )) :
          <EmptyMessage>your cart is empty</EmptyMessage>}
      </CartItems>
     <ButtonCart onClick={goToCheckout}>CHECKOUT</ButtonCart>
    </CartDropdownContainer>
  )
}

export default CartDropdown