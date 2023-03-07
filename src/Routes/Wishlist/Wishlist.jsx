import React from 'react'
import WishlistItem from './WishlistItem'
import './WishListStyles.scss'
import { WishListContext } from '../../context/WishListContext'
import { useContext } from 'react'



function Wishlist() {

  const {WishListItems} = useContext(WishListContext)


  return (
    <div className='list-container'>
      {WishListItems.map((item) => <WishlistItem key={item.id} item={item}/>)}
    </div>
  )
}

export default Wishlist