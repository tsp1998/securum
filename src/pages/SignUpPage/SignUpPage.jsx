import React from 'react'
import { Redirect } from 'react-router-dom'
//css
import "./SignUpPage.scss"

//layouts
import Header from '../../layouts/Header/Header'
import PageInfo from '../../layouts/PageInfo/PageInfo'
import SignUpForm from '../../layouts/SignUpForm/SignUpForm'
import NewsLetter from '../../layouts/NewsLetter/NewsLetter'
import Footer from '../../layouts/Footer/Footer'


const SignUpPage = () => {
  if (window && localStorage.securumToken) return <Redirect to="/" />
  return (
    <div className="index-page">
      <Header />
      <PageInfo pageName="Sign Up" />
      <SignUpForm />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default SignUpPage
