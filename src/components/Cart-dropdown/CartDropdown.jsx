import React from 'react'
import { CartDropdownContainer, EmptyMessage, CartItems, ButtonCart} from './CartDropdownStyles.jsx'
import { useNavigate } from 'react-router-dom'
import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'



function CartDropdown() {
  const {setIsCartOpen, isCartOpen} = useContext(CartContext)
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }
  const { cartItems } = useContext(CartContext);
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