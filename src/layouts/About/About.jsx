import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./About.scss"

//assets
import aboutImage from '../../assets/img/about-img.png'

const About = () => {
  return (
    <section className="about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 about-text">
            <h2>What is Securum</h2>
            <h5>Securum is an innovative payment network and a new kind of money.</h5>
            <p>Securum is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
            <Link to="" className="site-btn sb-gradients sbg-line mt-5">Get Started</Link>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About
