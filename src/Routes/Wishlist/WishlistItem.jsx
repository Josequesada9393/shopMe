import React, { useContext } from 'react'
import './WishListItemStyles.scss'
import { BsHeartbreakFill } from 'react-icons/bs'
import { WishListContext } from '../../context/WishListContext';
import { CartContext } from '../../context/CartContext';
import { InvertedButton } from '../../components/button/Button.styles';

function WishlistItem({ item }) {

  const { removeItemFromWishList } = useContext(WishListContext)
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(item);

  const removeItem = () => {
    console.log(item)
     removeItemFromWishList(item)
  }
  const { imageUrl, name, price } = item;
  return (
      <div className='WishList-card-container'>
        <BsHeartbreakFill onClick={removeItem} className='removeIcon'/>
      <img className="imageWishList" src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
     <InvertedButton className="addToCartButton" buttonType='inverted' onClick={addProductToCart}>Add to Cart</InvertedButton>
    </div>
  )
}

export default WishlistItem