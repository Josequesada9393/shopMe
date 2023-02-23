import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import './Navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../../assets/Crown.svg'
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { signOut } from "firebase/auth";
import { signOutUser } from "../../../Utils/Firebase/firebase";
const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
      <Link to='/' className="logo-container">
        <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          {currentUser && <div className="nav-link">{currentUser.displayName}</div>}
        <Link className="nav-link" to='/shop'>
          SHOP
          </Link>
          {currentUser ? (<span onClick={() => signOutHandler} className="nav-link">SIGN OUT</span>) :
           ( <Link className="nav-link" to='/auth'>
              Sign In
            </Link>)}
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation