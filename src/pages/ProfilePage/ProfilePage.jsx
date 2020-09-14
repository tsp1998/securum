import React from 'react'

//css
import "./ProfilePage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import Profile from '../../layouts/Profile/Profile'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const ProfilePage = () => {
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="Blog" />
      <Profile />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProfilePage
