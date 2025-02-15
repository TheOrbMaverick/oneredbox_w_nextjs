"use client";
// src/components/Hero.tsx
// import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const mapSection = document.getElementById("nigerian-map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
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
            Your Construction Project Management Company {""}
            <br />
            <span className="text-red-500 lg:text-5xl">
              Dashoard with video feed, cost breakdown and project updates
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-3xl text-gray-200 xlext-left text-center mb-10">
            Our business is honesty and transparency, construction is just the
            vehicle.
          </p>

          <button
            onClick={handleGetStarted}
            className="w-1/2 xl:w-1/2 xl:self-start px-4 py-2 bg-red-500 text-white text-lg font-semibold rounded hover:bg-red-600"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center"> */}
      {/* <div className="flex flex-col items-center justify-center xl:w-2/5 w-full xl:p-0 p-5 relative z-10">
        <h1 className="text-5xl xl:text-6xl font-bold text-white uppercase leading-10 xl:text-left text-center">
          Your Construction Project Management Company {""}
          <br />
          <span className="text-red-500 lg:text-5xl">Dashoard with video feed, cost breakdown and project updates</span>
        </h1>
        <p className="mt-4 text-lg md:text-3xl text-gray-200 xl:text-left text-center mb-10">
          Our business is honesty and transparency, construction is just the vehicle.
        </p>

        <button
          onClick={handleGetStarted}
          className="w-full xl:w-1/2 xl:self-start px-4 py-2 bg-red-500 text-white text-base font-semibold rounded hover:bg-red-600"
        >
          Get Started
        </button>
      </div>

      <div className="relative flex xl:w-3/5 w-full">
        <Image
          className="  w-full object-cover"
          src="/images//construction.svg"
          alt=""
          width={50}
          height={50}
        />
        <div className="absolute inset-0 xl:block hidden bg-gradient-to-r from-black via-black/5 to-transparent"></div>
      </div> */}

      {/* </div> */}
    </section>
  );
};
