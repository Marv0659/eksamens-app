"use client";
import React from "react";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function TicketCardRegular() {
  const dispatch = useContext(BasketUpdaterContext);

  return (
    <div className="ticketCard">
      <h3>FOOFEST 24</h3>
      <h2>REGULAR</h2>
      <h1>799,-</h1>
      <button onClick={() => dispatch((o) => o.concat({ ticket: "Regular", price: 799 }))}>Læg i kurv</button>
    </div>
  );
}

export default TicketCardRegular;
