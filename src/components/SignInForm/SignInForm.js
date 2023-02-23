import React from 'react'
import "../SignInForm/SignInForm.scss"
import { useState, useContext } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../Utils/Firebase/firebase'
import FormInput from '../FormInput/FormInput'
import Button from '../button/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { UserContext } from '../../context/UserContext'


const SignInForm = () => {
  const {setCurrentUser} = useContext(UserContext)
//Google sign in
  const signInWithGoogle = async () => {
    //create user in firebase with google
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user)
    //store user in databse
    await createUserDocumentFromAuth(user)
  }

  //Email And Password sign in
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields


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
      const { user } = await signInWithEmailAndPassword(email, password);
      setCurrentUser(user)
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