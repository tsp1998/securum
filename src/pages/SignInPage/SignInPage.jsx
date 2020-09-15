import React from 'react'

import { Redirect } from 'react-router-dom'

//css
import "./SignInPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import SignInForm from '../../layouts/SignInForm/SignInForm'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const SignInPage = () => {
  if (window && localStorage.securumToken) return <Redirect to="/" />
  return (
    <div className="index-page">
      <Header pageName="Sign In" />
      <PageInfo pageName="Sign In" />
      <SignInForm />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default SignInPage
