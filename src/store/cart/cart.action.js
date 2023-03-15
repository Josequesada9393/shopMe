import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../Utils/Firebase/reducer/reducer.utils";

import { useSelector } from 'react-redux'
import { selectCartItems } from "./cart.selector";


//logic to update the cartItems from state


export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  };
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return [...cartItems]
}



export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}


//create action and dispatch to set cart items

export const setCartItems = (cartItems) => {
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
}


 export  const addItemToCart = (cartItems, productToAdd) => {
   const newCartItems = addCartItem(cartItems, productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

 export  const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }

 export  const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
  }


  // cart open

export const setIsCartOpen = (isCartOpen) => {
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)
  }