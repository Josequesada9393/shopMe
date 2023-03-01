import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  };
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  console.log('hi')
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return [...cartItems]
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  quantity: 0,
  setQuantity: () => { },
  removeItemToCart: () => {}
});


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  useEffect(() => {
    const newCarCount = cartItems.reduce((total, carItem) =>
    total + carItem.quantity, 0);
    setQuantity(newCarCount)
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, quantity, removeItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}