import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import './Navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../../assets/Crown.svg'


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
      <Link to='/' className="logo-container">
        <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>
          SHOP
          </Link>
          </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation