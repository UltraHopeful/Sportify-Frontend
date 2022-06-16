import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkout";
import './membershipPlan.css'

const stripePromise = loadStripe("pk_test_51LAz4KC9WWOmeUQqQnjG12zdy2nfQtoTOTtTqfKI2n29aZzvrXfa5JSLkHvlzQ1M4M5PHiWA31eyTVog8hgllFRv00CUHckRs6");

export default function MembershipPlan() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="membershipPlan">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}