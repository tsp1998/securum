import React from 'react'
//routing
import { Link } from 'react-router-dom'

//css
import "./Header.scss"

//assets
import logo from '../../assets/images/logo.png'

const Header = ({ pageName }) => {
  return (
    <header className="header-section clearfix">
      <div className="container-fluid">
        <Link to="/" className="site-logo">
          <img src={logo} alt="" />
        </Link>
        <div className="responsive-bar"><i className="fa fa-bars faIcon"></i></div>
        <Link to="" className="user"><i className="fa fa-user faIcon"></i></Link>
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
        <nav className="main-menu">
          <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/single-blog">Single Blog</Link></li>
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

export default Header
