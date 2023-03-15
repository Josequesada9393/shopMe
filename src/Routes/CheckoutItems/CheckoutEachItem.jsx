import React from 'react'
import './CheckoutEachItem.scss'
import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useDispatch } from 'react-redux'

function CheckoutEachItem({ item }) {
  const { name, price, imageUrl, quantity } = item;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  return (
    <div className='checkout-item-container'>
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => dispatch(removeItemToCart(cartItems, item))} >
          &#10094;
        </div>
       <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItemToCart(cartItems, item))}>
          &#10095;
          </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={() => dispatch(clearItemFromCart(cartItems, item))} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutEachItem