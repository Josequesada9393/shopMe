import React from 'react'
import '../Authentication/Authentication.styles.scss'
import SignUpForm from '../SingUpForm/SignUpForm.tsx';
import SignInForm from '../SignInForm/SignInForm.tsx'

  function Authentication() {

  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm />
    </div>
  )
  }

export default Authentication