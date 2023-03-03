import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import {LogoContainer, NavigationContainer, NavLinksContainer, NavLink } from './Navigation.styles'
import {ReactComponent as CrwnLogo} from '../../../assets/Crown.svg'
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { signOutUser } from "../../../Utils/Firebase/firebase";
import CartIcon from "../../../components/cart-icon/CartIcon";
import CartDropdown from "../../../components/Cart-dropdown/CartDropdown";
import { CartContext } from "../../../context/CartContext";

const Navigation = () => {

  const {isCartOpen} = useContext(CartContext)

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/' >
        <CrwnLogo className="logo"/>
      </LogoContainer>
        <NavLinksContainer >
          {currentUser && <NavLink>{currentUser.displayName}</NavLink>}
        <NavLink to='/shop'>
          SHOP
          </NavLink>
          {currentUser ? (<NavLink as span onClick={() => signOutHandler()}>SIGN OUT</NavLink>) :
           ( <NavLink to='/auth'>
              Sign In
            </NavLink>)}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation