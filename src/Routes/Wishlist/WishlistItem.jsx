import React from 'react'
import './WishListItemStyles.scss'

function WishlistItem({ item }) {

  const { imageUrl, name, price } = item;
  return (
    <div>
     <div className='WishList-card-container'>
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