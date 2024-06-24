

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CheckoutFormJSX from './CheckoutFormJSX'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripePopup() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [donationAmount, setDonationAmount] = useState(500); // Default to $5
  const handleDonationAmountChange = (event) => {
    setDonationAmount(parseInt(event.target.value) * 100); // Convert to cents
  };

  React.useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "donate", amount: donationAmount  }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [donationAmount]);

  const appearance = {
    theme: 'night',
    variables: {
      fontFamily: 'Sohne, system-ui, sans-serif',
      fontWeightNormal: '500',
      borderRadius: '8px',
      colorBackground: '#212936',
      colorPrimary: '#EFC078',
      accessibleColorOnColorPrimary: '#1A1B25',
      colorText: 'white',
      colorTextSecondary: 'white',
      colorTextPlaceholder: '#ABB2BF',
      tabIconColor: 'white',
      logoColor: 'dark'
    },
    rules: {
      '.Input': {
        //backgroundColor: '#212D63',
        border: '1px solid var(--colorPrimary)'
      }
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className=" bg-gray-800 w-80 p-3 border border-amber-500 rounded-3xl text-white ">
      <div className="space-y-4">
        <div className=" text-2xl mx-auto flex items-center justify-center text-green-500 border-b ">51xmi.com</div>
        <label htmlFor="donationAmount" className="block text-sm font-medium ">
        Custom Donation Amount(5-100):        
        <span className=" text-amber-500"> {donationAmount/100}$</span>
        </label>

        <input
          type="range"
          id="donationAmount"
          name="donationAmount"
          min="5"
          max="100"
          value={donationAmount / 100}
          className="w-full h-2  rounded-lg   cursor-pointer   "
          onChange={handleDonationAmountChange}
        />

      </div>

      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFormJSX donationAmount={donationAmount}/>
        </Elements>
      )}
    </div>
  );
}