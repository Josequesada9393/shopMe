import React from 'react'
import Button from '../button/Button'
import './ProductCardStyle.scss'
import { useContext } from 'react'
import { WishListContext } from '../../context/WishListContext'
import { InvertedButton } from '../button/Button.styles'
import {BsFillHeartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import {addItemToCart} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

function ProductCard({ product }) {

  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product;
  const { addItemToWishList } = useContext(WishListContext);

  const addProductToCart = () => addItemToCart(cartItems, product);

  const addProductToWishList = () => {
    addItemToWishList(product)
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <BsFillHeartFill onClick={addProductToWishList} className='wishListButton'/>
      <InvertedButton buttonType='inverted' onClick={addProductToCart}>Add to Cart</InvertedButton>
    </div>
  );
}

export default ProductCard