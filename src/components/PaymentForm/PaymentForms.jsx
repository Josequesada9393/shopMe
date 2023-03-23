import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { InvertedButton } from '../button/Button.styles'
import {PaymentFormContainer, FormContainer} from './PaymentFormStyles'


function PaymentForms() {
  const stripe = useStripe();

  const elements = useElements()

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return
    }
    const response = await fetch('shopme\netflify\functions\create-payment-intent.js', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 1000 })

    })
      .then(res => res.json())

    console.log(response)
    }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <InvertedButton>Pay Now</InvertedButton>
        </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForms