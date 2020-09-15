import React, { useState } from 'react'
//routing
import { Link, withRouter } from 'react-router-dom'

//css
import "./Header.scss"

//assets
import logo from '../../assets/images/logo.png'

const Header = (props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const { pageName } = props;
  const logout = () => {
    localStorage.removeItem("securumToken");
    // ...redux store clear code
    props.history.push("/")
  }
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <Link to="/" className="site-logo">
          <img src={logo} alt="" />
        </Link>
        <div
          className={`responsive-bar`}
          onClick={() => setToggleSidebar(!toggleSidebar)}>
          <i className="fa fa-bars faIcon"></i>
        </div>
        <Link
          to={window && localStorage.securumToken ? "/profile" : pageName === "Sign In" ? "/signup" : "/signin"}
          className="user"
        ><i className="fa fa-user faIcon"></i></Link>
        {
          window && !localStorage.securumToken && (
            <Link to={`${pageName === "Sign In" ? "/signup" : "/signin"}`} className="site-btn">
              {pageName === "Sign In" ? "Sign Up" : "Sign In"}
            </Link>
          ) || (
            <Link to="/profile" className="site-btn">
              Profile
            </Link>
          )
        }
        <nav className={`main-menu ${toggleSidebar ? "show-sidebar" : ""}`}>
          <ul className="menu-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/single-blog">Single Blog</Link></li>
            {window && localStorage.securumToken && (<li><Link onClick={logout} to="#">Log Out</Link></li>)}
            {/* <li><Link to="/">Solution</Link></li>
            <li><Link to="/about">Features</Link></li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/contact">About</Link></li>
            <li><Link to="/single-blog">Contact</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default withRouter(Header)
