import React from 'react'
// import "./SignUpForm.scss"
import { useState } from 'react'




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
    console.log(formFields)
}

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
          <label htmlFor="Display Name">Display Name</label>
        <input require type="text" onChange={handleChange} name="displayName" value={displayName} />
          <label htmlFor="email">Email</label>
          <input require type="email" onChange={handleChange} name="email" value={email}/>
          <label htmlFor="password">Password</label>
          <input require type="password" onChange={handleChange} name="password" value={password} />
          <label htmlFor="Confirm-password">Confirm Password</label>
        <input require type="password"  onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default SignUpForm