import React from 'react'
import './CartItem.scss'

function CartItem({ cartItem }) {
  console.log(cartItem)

  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`}/>
     <div>
      <span>{name}</span><br />
      <span>{quantity} x {price}</span>
    </div>
    </div>
  )
}

export default CartItem