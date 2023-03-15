import { createSelector } from 'reselect'

export const selectCartItems = (state) => state.cartItems.cartItems

export const selectIsCartOpen = (state) => state.cartItems.isCartOpen