import React from 'react'
import "../SignInForm/SignInForm.scss"
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../Utils/Firebase/firebase'
import FormInput from '../FormInput/FormInput'
import Button from '../button/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'


const SignInForm = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(email, password);
      resetFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

    return (
      <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="email"
            require="true"
            type="email"
            onChange={handleChange}
            name="email"
            value={email} />
          <FormInput
            label="Password"
            require="true"
            type="password"
            onChange={handleChange}
            name="password"
            value={password} />
          <div className='buttons-container'>
            <Button onClick={handleSubmit} type="submit">Submit</Button>
            <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
            </div>
        </form>
      </div>
    )
  }

export default SignInForm