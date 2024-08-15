"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface MyState {
  cart: [];
}

const page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: MyState) => state.cart);

  return (
    <div className="container mx-auto">
      {/* <h3 className="text-center text-4xl">Cart</h3>
      {cartItems.map((item) => {
        <div key={item.model}>
          <img src={item.img} alt={item.model} />
          <h1>{item.model}</h1>
        </div>;
      })} */}
    </div>
  );
};

export default page;
