import React from 'react'

//css
import "./BlogPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import Blog2 from '../../layouts/Blog2/Blog2'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const BlogPage = () => {
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="Blog" />
      <Blog2 />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default BlogPage
