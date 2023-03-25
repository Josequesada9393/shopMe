
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem } from "../categories/category.reducer";

export interface cartInitialState {
  isCartOpen: boolean,
  cartItems: CategoryItem[]
}

export const CART_INITIAL_STATE:cartInitialState = {
  isCartOpen: false,
  cartItems: [],
}

export const addCartItem = (cartItems:CategoryItem[], productToAdd:CategoryItem) => {
  const existingCartItem = cartItems.find((cartItem:CategoryItem) => cartItem?.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem:CategoryItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  };
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const removeCartItem = (cartItems:CategoryItem[], cartItemToRemove:CategoryItem) => {
  const existingItem = cartItems.find((cartItem:CategoryItem) => cartItem.id === cartItemToRemove.id)

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return [...cartItems]
}


export const clearCartItem = (cartItems:CategoryItem[], cartItemToClear:CategoryItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action:PayloadAction<CategoryItem>) => {
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    removeItemToCart: (state, action:PayloadAction<CategoryItem>) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    clearItemFromCart: (state, action:PayloadAction<CategoryItem>) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload)
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    }
  }
})

export const {addItemToCart, removeItemToCart, clearItemFromCart, setIsCartOpen} = cartSlice.actions

export const cartReducer = cartSlice.reducer;



