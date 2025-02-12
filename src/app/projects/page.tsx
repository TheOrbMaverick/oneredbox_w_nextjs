"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  const [isVideo, setIsVideo] = useState<boolean>(true);
  return (
    <div className="text-white">
      <Navbar />
      <div className="px-8 lg:px-32 text-white order pt-28 space-y-5">
        {/*  */}
        <div className="w-1/ bg-[#222] bg-opacity-30 shadow-lg shadow-gray-800 border border-white border-opacity-10 px-6 lg:px-12 py-4 rounded-2xl">
          <h3 className="font-bold text-2xl mb-6">Project Title</h3>

          <div className="flex gap-3 lg:gap-12 bordr flex-col lg:flex-row">
            {/*  */}
            <div className="lg:w-1/2 h-full">
              <div className="flex gap-3 flex-col">
                <div className="flex-1">
                  {isVideo ? (
                    <video
                      src="/videos/sample.mp4"
                      className="w-full  h-[216px] sm:h-[300px] border border-white border-opacity-20 object-cover rounded-lg"
                      controls
                    />
                  ) : (
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      allowTouchMove={true}
                      style={{ height: "100%" }}
                    >
                      <SwiperSlide>
                        <div className="relative w-full h-[216px] lg:h-[300px] rounded-2xl overflow-hidden order border-white border-opacity-50">
                          <Image
                            src={"/images/construction.png"}
                            fill={true}
                            alt="Image"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="relative w-full h-[216px] lg:h-[300px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                          <Image
                            src={"/images/construct.jpg"}
                            fill={true}
                            alt="Image"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="relative w-full h-[216px] lg:h-[300px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                          <Image
                            src={"/images/heroImg.jpg"}
                            fill={true}
                            alt="Image"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  )}
                </div>
                <div className="flex gap-4  justify-center boder border-white border-opacity-10 bg-[#222] shadow-xl px-4 py-2 rounded-lg font-semibold">
                  <p
                    className={`flex-1 ${
                      isVideo &&
                      "border-opacity-40 border border-white shadow-lg"
                    } rounded-md text-center py-1 cursor-pointer transition-all duration-300`}
                    onClick={() => setIsVideo(true)}
                  >
                    Video
                  </p>
                  <p
                    className={`flex-1 ${
                      !isVideo &&
                      "border-opacity-40  border border-white shadow-lg"
                    }    rounded-md text-center py-1 cursor-pointer transition-all duration-300`}
                    onClick={() => setIsVideo(false)}
                  >
                    Images
                  </p>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="mt-4 lg:mt-0 lg:w-1/2 h-full rounded-xl self-enter justify-self-center overflow-hidden pb-4 border border-white border-opacity-10 bg-[#22]">
              <h4 className="font-bold text-xl px-4 bg-[#222] py-2 border-b border-white border-opacity-20">
                Project Details
              </h4>
              <div className="space-y-3 lg:text-md text-sm px-4 pt-4">
                <p>
                  <span className="font-bold text-xl">Client:</span> Client Name
                </p>
                <p>
                  <span className="font-bold text-xl">Date:</span> Project Date
                </p>
                <p>
                  <span className="font-bold text-xl">Location:</span> Project
                  Location
                </p>
                <p className="flex lg:block items-start gap-2">
                  <span className="font-bold text-xl leading-none">About:</span>{" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti suscipit veritatis totam quis amet modi dolorem,
                  ipsam voluptatibus quo ratione, perspiciatis in sapiente dicta
                  sit ea quidem excepturi atque. Maxime!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}
