"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/client.png",
      testimonial: "OneRedBox is an amazing company",
      name: "Abiodun Vlad",
    },
    {
      image: "/images/client.png",
      testimonial: "OneRedBox is an amazing company",
      name: "Abiodun Vlad",
    },
    {
      image: "/images/client.png",
      testimonial: "OneRedBox is an amazing company",
      name: "Abiodun Vlad",
    },
    {
      image: "/images/client.png",
      testimonial: "OneRedBox is an amazing company",
      name: "Abiodun Vlad",
    },
    {
      image: "/images/client.png",
      testimonial: "OneRedBox is an amazing company",
      name: "Abiodun Vlad",
    },
  ];

  return (
    <div className="bg-black px-5 md:px-20 py-10 flex flex-col items-center">
      <h1 className="text-white text-center font-bold text-3xl md:text-4xl mb-16">
        HEAR FROM OUR CLIENTS
      </h1>

      <div className="flex items-center justify-center">
        <Carousel
          autoPlay
          interval={1500}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          centerMode
          centerSlidePercentage={100}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 items-center text-center"
            >
              <div className="w-20 h-20 sm:w-32 sm:h-32 mb-4">
                <Image
                  src={testimonial.image}
                  className=" rounded-full object-cover"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <p className="text-white text-center text-base sm:text-2xl mb-4">
                {testimonial.testimonial}
              </p>
              <p className="text-base text-center sm:text-2xl font-bold text-purple-600">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
