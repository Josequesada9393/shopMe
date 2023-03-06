import { createContext, useState, useEffect, useReducer } from "react";


//redux
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  };
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return [...cartItems]
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  quantity: 0,
  setQuantity: () => { },
  removeItemToCart: () => { },
  clearItemFromCart: () => { },
  cartTotal: 0
});

//REDUCER VERSION

export const CART_ACTION_TYPES = {
  'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default: throw new Error(`unhandled type ${type} in cartReducer`)
  }
}

const INITIAL_STATE = {
  isCartOpen: false
}


export const CartProvider = ({ children }) => {

  const [{ isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  useEffect(() => {
    const newCarCount = cartItems.reduce((total, carItem) =>
    total + carItem.quantity, 0);
    setQuantity(newCarCount)
  }, [cartItems])

   useEffect(() => {
    const cartTotal = cartItems.reduce((total, cartItem) =>
    total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(cartTotal)
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    quantity,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
    setCartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}