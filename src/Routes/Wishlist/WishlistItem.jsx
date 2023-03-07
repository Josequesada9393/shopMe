import React, { useContext } from 'react'
import './WishListItemStyles.scss'
import { BsHeartbreakFill } from 'react-icons/bs'
import { WishListContext } from '../../context/WishListContext';

function WishlistItem({ item }) {

  const {removeItemFromWishList} = useContext(WishListContext)

  const removeItem = () => {
    console.log(item)
     removeItemFromWishList(item)
  }
  const { imageUrl, name, price } = item;
  return (
    <div>
      <div className='WishList-card-container'>
        <BsHeartbreakFill onClick={removeItem} className='removeIcon'/>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
    </div>
  )
}

export default WishlistItem