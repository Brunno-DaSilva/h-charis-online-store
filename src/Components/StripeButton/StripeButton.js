import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HGsfyAgMG1t5na2FQl7Xc6VqLBfZZtTuFtVpi6Ua6CwdyauEcXToqhUZJWphldPJx2S1ezSoChs6GyaH6KSBhtb00bO1M0Zud";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div className="stripe-container">
      <StripeCheckout
        label="Pay Now"
        name="HCharis"
        billingAddress
        shippingAddress
        image="https://res.cloudinary.com/duprwuo4j/image/upload/v1598038271/h-charis-online-store/hcharis-HC_xoaf2l.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
