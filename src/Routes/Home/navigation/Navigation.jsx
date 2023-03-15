import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  NavLinks
} from './Navigation.styles'
import  ShopMeLogo from '../../../assets/ShopMe.png'
import { useContext, useState } from "react";
import { signOutUser } from "../../../Utils/Firebase/firebase";
import CartIcon from "../../../components/cart-icon/CartIcon";
import CartDropdown from "../../../components/Cart-dropdown/CartDropdown";
import { CartContext } from "../../../context/CartContext";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {

  // const currentUser = useSelector((state) => state.user.currentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)
  // const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={ShopMeLogo} alt="logo" style={{ height: '100px', width: '120px', 'marginTop': '-30px'}} />
        </LogoContainer>
        <NavLinks>
          <NavLink to='wishlist'>WISHLIST</NavLink>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation