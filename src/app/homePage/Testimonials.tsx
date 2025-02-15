"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/wole.jpeg",
      testimonial:
        "In our experience working with Oneredbox, we find them to be available to patiently work through several iterations of a project to achieve the desired quality of output in the end. The 3D renders they produced are of high quality",
      name: "Wole Olabanji - Neoterra Projects",
    },
    {
      image: "/images/laylah.jpeg",
      testimonial: "OneRedBox is an amazing company",
      name: "Laylah Ali Othman - CEO L&N Group",
    },
    {
      image: "/images/stephen.jpeg",
      testimonial:
        "Oneredbox has consistently supported and delivered on various projects for us. Over time, we have found that your approach to exemplary work is unbeatable. We appreciate your time, patience, commitment, dedication to meet our deadlines and are glad to refer you to prospective clients.",
      name: "Stephen Kolo - Design Continuum Architects",
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
          interval={4500}
          infiniteLoop
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
          width={"600px"}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col w-full px-12 lg:max-w-[600px] mb-10 items-center text-center"
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

              <p className="text-white text-center text-base sm:text-md mb-4">
                {testimonial.testimonial}
              </p>
              <p className="text-base text-center sm:text-2xl font-bold text-orange-300">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
