import React from 'react'
import './CartDropdown.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '../button/Button'
import CartItem from '../CartItem/CartItem'
import {Link } from "react-router-dom"


function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}/>
        ))}
      </div>
      <Link to='/checkout'><Button>CHECKOUT</Button></Link>
    </div>
  )
}

export default CartDropdown