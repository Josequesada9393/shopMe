import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  };
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => {}
});


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setQuantity(cartItems.map((item) => {
      return item.quantity
    }).reduce(function (x, y){
        return x + y
   }, 0))
  }


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, quantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}