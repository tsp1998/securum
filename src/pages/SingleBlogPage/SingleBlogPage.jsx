import React from 'react'

//css
import "./SingleBlogPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import Blog3 from '../../layouts/Blog3/Blog3'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const IndexPage = () => {
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="Single Blog" />
      <Blog3 />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default IndexPage
