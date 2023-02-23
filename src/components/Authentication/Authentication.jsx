import React from 'react'
import '../Authentication/Authentication.styles.scss'
import SignUpForm from '../SingUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm.js'

  function Authentication() {

  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm />
    </div>
  )
  }

export default Authentication