import React from 'react'
import './CartDropdown.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '../button/Button'
import CartItem from '../CartItem/CartItem'

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown