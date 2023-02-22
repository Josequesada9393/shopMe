import React from 'react'
// import "./SignUpForm.scss"
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/Firebase/firebase'
import FormInput from '../FormInput/FormInput'


const SignUpForm = () => {

  const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {displayName, email, password, confirmPassword} = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('hello')
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName })
      resetFields()

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
      console.log('user creation encountered an error', error)

      }
    }

  };


  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          require="true"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName} />

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

        <FormInput
        label="ConfirmPassword"
        require="true"
        type="password"
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm