import React from "react";
import PropertySearchForm from "./PropertySearchForm";

const Hero = () => {
  return (
    <div>
      <section className="bg-orange-800 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Find The Perfect Pandit
            </h1>
            <p className="my-4 text-xl text-white">
              Discover the perfect pandit that suits your needs.
            </p>
          </div>
          <PropertySearchForm />
        </div>
      </section>
    </div>
  );
};

export default Hero;
