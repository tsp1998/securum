import React from 'react'

//routing
import { Link } from 'react-router-dom'

//css
import "./AboutPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import About from '../../layouts/About/About'
import Fact from '../../layouts/Fact/Fact'
import Team from '../../layouts/Team/Team'
import Review from '../../layouts/Review/Review'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const AboutPage = () => {
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="About Us" />
      <About />
      <Fact />
      <Team />
      <Review />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default AboutPage
