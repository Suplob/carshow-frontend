import React from "react";
import CarCard from "../shared/CarCard";

const Services = async () => {
  return (
    <div>
      <h1
        className="text-5xl text-center mt-12 mb-3"
        style={{ marginTop: "7rem" }}
      >
        Cars
      </h1>
      <div>
        <CarCard></CarCard>
      </div>
    </div>
  );
};

export default Services;
