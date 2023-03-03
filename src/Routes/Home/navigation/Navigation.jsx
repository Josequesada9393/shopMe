import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  NavLinks
} from './Navigation.styles'
import {ReactComponent as CrwnLogo} from '../../../assets/Crown.svg'
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { signOutUser } from "../../../Utils/Firebase/firebase";
import CartIcon from "../../../components/cart-icon/CartIcon";
import CartDropdown from "../../../components/Cart-dropdown/CartDropdown";
import { CartContext } from "../../../context/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
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