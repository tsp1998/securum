import React from 'react'

//routing
import { Link } from 'react-router-dom'
//css
import "./Features.scss"

import FA from 'react-fontawesome'

const Features = () => {
  return (
    <section className="features-section spad gradient-bg">
      <div className="container text-white">
        <div className="section-title text-center">
          <h2>Our Features</h2>
          <p>Securum is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="mobile" style={{fontSize: "62px"}} />
            <div className="feature-content">
              <h4>Mobile Apps</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="shield" />
            <div className="feature-content">
              <h4>Safe & Secure</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="credit-card" />
            <div className="feature-content">
              <h4>Wallet</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="headphones" />
            <div className="feature-content">
              <h4>Experts Support</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="exchange" />
            <div className="feature-content">
              <h4>Instant Exchange</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
          {/* <!-- feature --> */}
          <div className="col-md-6 col-lg-4 feature">
            <FA name="sliders" />
            <div className="feature-content">
              <h4>Recuring Buys</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <Link to="" className="readmore">Readmore</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
