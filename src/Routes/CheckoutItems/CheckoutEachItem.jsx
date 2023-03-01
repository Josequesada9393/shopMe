import React from 'react'
import './CheckoutEachItem.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CheckoutEachItem({ item }) {
  const { name, price, imageUrl, quantity } = item;
  const {addItemToCart, removeItemToCart, clearItemFromCart} = useContext(CartContext)
  return (
    <div className='checkout-item-container'>
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => removeItemToCart(item)} >
          &#10094;
        </div>
       <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
          </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={() => clearItemFromCart(item)} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutEachItem