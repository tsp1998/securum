import React from 'react'

//css
import "./ContactPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import Contact from '../../layouts/Contact/Contact'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const ContactPage = () => {
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="Contact Us" />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ContactPage
