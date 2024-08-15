import { add } from "@/app/store/Cartslice";
import React from "react";

import { useDispatch } from "react-redux";

interface MyCart {
  car: {};
}

const AddToCardButton = ({ car }: MyCart) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(add(car));
  };

  return (
    <div>
      <button
        className="border border-gray-900 hover:bg-gray-900 hover:text-white py-1 px-3 rounded-sm"
        onClick={() => handleCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCardButton;
