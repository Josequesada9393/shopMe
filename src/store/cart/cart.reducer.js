
import { createSlice } from "@reduxjs/toolkit";


export const CART_INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
}

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

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem([...state.cartItems], action.payload)
    },
    removeItemToCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload)
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    }
  }
})

export const {addItemToCart, removeItemToCart, clearItemFromCart, setIsCartOpen} = cartSlice.actions

export const cartReducer = cartSlice.reducer;



