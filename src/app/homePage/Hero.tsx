"use client";
// src/components/Hero.tsx
// import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // bg-black flex flex-col-reverse lg:mt-10 w-full border   max-w-full overflow-hidden xl:flex-row xl:pl10 pl-0 xl:pt-0 pt-32 xl:h-screen h-[600px]  bg-cover bg-center mb-0 xl:gap-10 gap-0 relative
  return (
    <section
      className="lg:w-full lg:h-full relative w-full h-[600px]"
      // style={{ backgroundImage: "url('/construction.webp')" }}
    >
      <img
        src="/images/construction.svg"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 flex items-center">
        <div className="max-w-[800px] text-center mx-auto">
          <h1 className="text-3xl xl:text-6xl font-bold text-white uppercase leading-10 xlext-left text-center">
            Construction Project Management {""}
            <br />
          </h1>
          <h2 className="text-red-500 lg:text-5xl font-bold">
            Dashoard with video feed, cost breakdown and project updates
          </h2>
          <p className="mt-4 text-lg md:text-3xl text-gray-200 xlext-left text-center mb-10">
            Our business is honesty and transparency. Construction is the vehicle.
          </p>

          <button
            onClick={handleGetStarted}
            className="w-1/2 xl:w-1/2 xl:self-start px-4 py-2 bg-red-500 text-white text-lg font-semibold rounded hover:bg-red-600"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
