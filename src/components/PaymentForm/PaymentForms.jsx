import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'
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


    }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
      <CardElement />
        <InvertedButton>Pay Now</InvertedButton>
        </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForms