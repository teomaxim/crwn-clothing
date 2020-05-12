import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lBUJ6C7qFIWoYgvn4bDUygjw00L9HePLdq';
  const onToken = token => {
      console.log(token);
      alert('Payment successful');
  }

  return (
      <StripeCheckout
        label='Pay Now'
        naem='CRWN clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  )
};

export default StripCheckoutButton;