import './App.css';
import Home from './Routes/Home/Home';
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './Routes/Home/navigation/Navigation';
import Authentication from './components/Authentication/Authentication'
import Shop from '../src/Routes/shop/Shop'
import CheckoutItems from './Routes/CheckoutItems/CheckoutItems';
import Wishlist from './Routes/Wishlist/Wishlist';
import { useEffect } from 'react';
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../src/Utils/Firebase/firebase';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
       dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutItems />} />
        <Route path="wishlist" element={<Wishlist />} />
       </Route>
    </Routes>
  );
}

export default App;
