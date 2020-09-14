import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./IndexPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import Hero from '../../layouts/Hero/Hero'
import About from '../../layouts/About/About'
import Features from '../../layouts/Features/Features'
import Process from '../../layouts/Process/Process'
import Fact from '../../layouts/Fact/Fact'
import Team from '../../layouts/Team/Team'
import Review from '../../layouts/Review/Review'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Blog from '../../layouts/Blog/Blog'
import Footer from '../../layouts/Footer/Footer'


const IndexPage = () => {
  return (
    <div className="index-page">
      <Header />
      <Hero />
      <About />
      <Features />
      <Process />
      <Fact />
      <Team />
      <Review />
      <NewsLetter />
      <Blog />
      <Footer />
    </div>
  )
}

export default IndexPage
