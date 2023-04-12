import React from 'react'
import { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { InvertedButton } from '../button/Button.styles'
import { PaymentFormContainer, FormContainer, PaymentButton } from './PaymentFormStyles'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'


import BUTTON_TYPE_CLASSES from '../button/Button.tsx'

function PaymentForms() {
  const cartTotal = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const stripe = useStripe();

  const [isProccessingPayment, setIsProcessingPayment] = useState(false)



  const elements = useElements()
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return
    }
        setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: cartTotal * 100 })
    })
      .then(res => res.json())

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'guest'
        }
      }
    });
    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {

        alert('payment successful')
      }
    }
    }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
      <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}
 isLoading={isProccessingPayment}>Pay Now</PaymentButton>
        </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForms