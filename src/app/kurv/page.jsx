"use client";
import { useContext } from "react";
import { BasketUpdaterContext, BasketValueContext } from "../contexts/basketContext";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

import "../kurv/kurv.css";
import Link from "next/link";

export default function Kurv() {
  const dispatch = useContext(BasketUpdaterContext);
  const basket = useContext(BasketValueContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    calculateTotal();
  }, [basket]);

  function calculateTotal() {
    let totalPrice = 0;

    basket.forEach((item) => {
      totalPrice += item.tentPrice;
    });
    console.log("totalprice", totalPrice, basket);

    setTotal(totalPrice + 90);
  }

  return (
    <main className="kurvContainer">
      <h1>Your Basket</h1>
      <ul>
        {basket.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              <h4>Type - {item.tent}</h4>
              <h2>
                {item.ticket} <span>{item.tentPrice},-</span>
              </h2>
            </li>
          );
        })}
      </ul>
      <h4>Fixed booking fee - 90,-</h4>
      <span className="totalprice">
        Total Price: <br /> {total},-
      </span>
      <Link href="/form">
        <button>Checkout</button>
      </Link>
    </main>
  );
}
