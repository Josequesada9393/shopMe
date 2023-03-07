import { createContext, useReducer } from 'react';

//logic for withlist, adding and removing

const addNewItem = (WishListItems, newWishListedItem) => {
  const existingItem = WishListItems.find((item) => newWishListedItem.id === item.id
  );
  if (!existingItem) {
    return [...WishListItems, { ...newWishListedItem }]
  } else {
    return [...WishListItems]
  }
};

const removeItem = (WishListItems, ItemToRemove) => {
  const newWishList = WishListItems.filter((item) => item.id != ItemToRemove.id)
  return [...newWishList]
};

export const WishListContext = createContext({
  WishListItems: [],
  addItemToWishList: () => { },
  removeItemFromWishList: () => { }
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


  const addItemToWishList = (newWishListedItem) => {
    const newWishList = addNewItem(WishListItems, newWishListedItem);
    dispatch({
      type: WISH_LIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
      payload: {
        WishListItems: newWishList
      }
    })
  }

  const removeItemFromWishList = (itemToRemove) => {
    const newWishList = removeItem(WishListItems, itemToRemove);
    dispatch({
      type: WISH_LIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
      payload: {
        WishListItems: newWishList
      }
    })
  }

  const value = {
    WishListItems,
    addItemToWishList,
    removeItemFromWishList
  };

  return <WishListContext.Provider value={value}>{children}</WishListContext.Provider>

  }