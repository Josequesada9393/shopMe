import React from 'react'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
   auth,
   signInWithGooglePopup,
   createUserDocumentFromAuth,
   signInWithGoogleRedirect } from '../../Utils/Firebase/firebase';
   
import SignUpForm from '../SingUpForm/SignUpForm';

  function SignInComponent() {

    useEffect( () => {
      const responding = async () => {
      const response = await getRedirectResult(auth);
        if(response) {
          const userDocRef = await createUserDocumentFromAuth(response.user)
        }
      };
       responding()

    }, [])



  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect</button>

    <SignUpForm/>
    </div>
  )
  }

export default SignInComponent