import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51H1xHnBqnWC7oDMfxye3eAkJN8qRqaOVjol7eSCbuEUqhUHcyDzdgFKmketpgMG3iFvRJMrTqq7ldxmYEuK233wM00VnHXUiCV");

export default function StripeComponent() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};