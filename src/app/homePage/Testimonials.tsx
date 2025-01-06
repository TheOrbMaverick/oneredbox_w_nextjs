"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-black px-5 md:px-20 py-10 flex flex-col items-center">
      <h1 className="text-white font-bold text-3xl md:text-4xl mb-16">
        HEAR FROM OUR CLIENTS
      </h1>

      <div className="grid md:grid-cols-3 justify-center items-center">
        <div className="flex flex-col mb-10 w-auto md:w-5/6">
          <div className="flex flex-row gap-1 mb-2">
            <Image
              src="/images/client.png"
              className="sm:w-20 w-10 sm:h-20 h-10 rounded-full"
              alt=""
              width={20}
              height={20}
            />
          </div>

          <p className="text-white text-base sm:text-2xl mb-4">
            OneRedBox is an amazing company
          </p>
          <p className="text-base sm:text-2xl font-bold text-purple-600">
            Ita Enang
          </p>
        </div>

        <div className="flex flex-col mb-10 w-auto md:w-5/6">
          <div className="flex flex-row gap-1 mb-2">
            <Image
              src="/images/client.png"
              className="sm:w-20 w-10 sm:h-20 h-10 rounded-full"
              alt=""
              width={20}
              height={20}
            />
          </div>

          <p className="text-white text-base sm:text-2xl mb-4">
            OneRedBox is an amazing company
          </p>
          <p className="text-base sm:text-2xl font-bold text-purple-600">
            Ita Enang
          </p>
        </div>

        <div className="flex flex-col mb-10 w-auto md:w-5/6">
          <div className="flex flex-row gap-1 mb-2">
            <Image
              src="/images/client.png"
              className="sm:w-20 w-10 sm:h-20 h-10 rounded-full"
              alt=""
              width={20}
              height={20}
            />
          </div>

          <p className="text-white text-base sm:text-2xl mb-4">
            OneRedBox is an amazing company
          </p>
          <p className="text-base sm:text-2xl font-bold text-purple-600">
            Ita Enang
          </p>
        </div>

        <div className="flex flex-col mb-10 w-auto md:w-5/6">
          <div className="flex flex-row gap-1 mb-2">
            <Image
              src="/images/client.png"
              className="sm:w-20 w-10 sm:h-20 h-10 rounded-full"
              alt=""
              width={20}
              height={20}
            />
          </div>

          <p className="text-white text-base sm:text-2xl mb-4">
            OneRedBox is an amazing company
          </p>
          <p className="text-base sm:text-2xl font-bold text-purple-600">
            Ita Enang
          </p>
        </div>
      </div>
    </div>
  );
}
