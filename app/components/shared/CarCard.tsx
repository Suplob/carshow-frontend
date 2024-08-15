"use client";
import React from "react";
import AddToCardButton from "./AddToCardButton";

interface Car {
  img: string;
  model: string;
  year: number;
  price: number;
  stock: number;
  description: string;
  _id: string;
}

const CarCard = async () => {
  const res = await fetch("https://carshow-backend.onrender.com/cars");
  const cars: Car[] = await res.json();

  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 ">
      {cars.map((car) => (
        <div className="border border-gray-500" key={car.model}>
          {/* <img src={car.img} width="100%" alt={car.model} /> */}
          <img
            src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="100%"
            alt={car.model}
          />
          <div className="p-3">
            <h1 className="text-3xl">{car.model}</h1>
            <h1 className="text-xl my-1">$ {car.price}</h1>
            <h1 className="">Stock: {car.stock}</h1>
            <h1 className="text-slate-500 my-3">{car.description}</h1>
            <AddToCardButton car={car}></AddToCardButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
