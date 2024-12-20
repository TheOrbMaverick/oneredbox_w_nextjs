// src/components/Hero.tsx
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/construction.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          So you are interested in Nigerian real estate
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover opportunities in construction, design, and project management.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded hover:bg-red-600">
          Get Started
        </button>
      </div>
    </section>
  );
};
