import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {
  return (
    <div className='cart-icon-container'>
      <ShopIcon className='shopping-icon'/>
      <span>0</span>
    </div>
  )
}

export default CartIcon