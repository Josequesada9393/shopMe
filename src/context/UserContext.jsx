import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, signOutUser } from '../Utils/Firebase/firebase';
import { createUserDocumentFromAuth } from '../Utils/Firebase/firebase';

//actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})


export const UserProvider = ({ children }) => {
  //user data
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
       setCurrentUser(user)
      console.log('wuat', user)
    })
    return unsubscribe
  },
    [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}