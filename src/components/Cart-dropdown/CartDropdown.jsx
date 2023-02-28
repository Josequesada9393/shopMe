import React from 'react'
import './CartDropdown.scss'
import Button from '../button/Button'

function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown