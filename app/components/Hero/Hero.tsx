import React from "react";
import car from "../../../utilities/car.png";

const Hero = () => {
  return (
    <div className="flex flex-wrap my-10 justify-between items-center">
      <img
        src={"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"}
        alt="Super car"
        width="50%"
        style={{ borderRadius: "1%" }}
      />
      <h1 className="text-5xl">Welcome to Carshow</h1>
    </div>
  );
};

export default Hero;
