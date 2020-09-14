import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./PageInfo.scss"

const PageInfo = ({ pageName }) => {
  return (
    <section className="page-info-section">
      <div className="container">
        <h2>{pageName}</h2>
        <div className="site-beradcamb">
          <Link to="/">Home</Link>
          <span><i className="fa fa-angle-right"></i> {pageName}</span>
        </div>
      </div>
    </section>
  )
}

export default PageInfo
