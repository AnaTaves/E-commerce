import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J4qtWA3S5Rf6Rc55ZSRgLsacfPkChyKqqwJMWYsTeEIe8sXxEaniwUVbeGpfDkDGqJ2kvVq3TEs3anWrpfvLWtz00YIgGvVuj';

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-commerce Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;