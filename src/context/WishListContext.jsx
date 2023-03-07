import { createContext, useReducer } from 'react';

//logic for withlist, adding and removing

const addNewItem = (WishListItems, newWishListedItem) => {
  const existingItem = WishListItems.find((item) => newWishListedItem.id === item.id
  );
  if (!existingItem) {
    return [...WishListItems, existingItem]
  }
}

export const WishListContext = createContext({
  WishListItems: [],
  addItemToWishList: () => { }
});

//REDUCER

const INITIAL_STATE = {
  WishListItems: []
}

export const WISH_LIST_ACTION_TYPES = {
  SET_WISHLIST_ITEMS: 'SET_WISHLIST_ITEMS'
}

const WishListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case WISH_LIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
      return {
        ...state,
        ...payload
      }
    default: throw new Error(`unhandled type ${type} in WishListReducer`)
  }
}


export const WishListProvider = ({ children }) => {

  const [{ WishListItems }, dispatch] =
    useReducer(WishListReducer, INITIAL_STATE)

  const setWishListItems = (items) => {
  dispatch({type: WISH_LIST_ACTION_TYPES.SET_WISHLIST_ITEMS, payload: items})
  }

  const addItemToWishList = (newWishListedItem) => {
    const newWishList = addNewItem(WishListItems, newWishListedItem);
    console.log(newWishList)
    setWishListItems(newWishList)

}

  const value = {
    WishListItems,
    setWishListItems,
    addItemToWishList
  };

  return <WishListContext.Provider value={value}>{children}</WishListContext.Provider>

  }