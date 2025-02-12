import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function ProjectCard() {
  const [isVideo, setIsVideo] = useState<boolean>(false);
  return (
    <>
      <div className="w- border p-6 rounded-2xl border-white border-opacity-20 shadow-xl bg-[#222] bg-opacity-10 shadow-slate-950">
        <h3 className="font-bold text-2xl mb-6">Project Title</h3>
        <div className="flex items-start flex-col gap-4">
          <div className="w-full boder relative border-red-500 h-[200px] md:h-[300px] sm:h-[400px]">
            <div className="w-full h-full">
              {isVideo ? (
                <>
                  {/* <div className="relative w-full full border-red-30 rounded-2xl overflow-hidden border  border-opacity-50"> */}
                  <video
                    src="/videos/sample.mp4"
                    className="w-full h-full object-cover rounded-xl"
                    controls
                  />
                  {/* </div> */}
                </>
              ) : (
                <Swiper
                  modules={[Navigation]}
                  navigation
                  allowTouchMove={true}
                  style={{ height: "100%" }}
                >
                  <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden border border-white border-opacity-50">
                      <Image
                        src={"/images/construction.png"}
                        fill={true}
                        alt="Image"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden border border-white border-opacity-50">
                      <Image
                        src={"/images/construct.jpg"}
                        fill={true}
                        alt="Image"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden border border-white border-opacity-50">
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
            {/* <Image
                src={"/images/heroImg.jpg"}
                fill={true}
                alt="Image"
                className="object-cover rounded-lg"
                /> */}
          </div>
          <div className="flex gap-4 w-full sm:w-1/2 mx-auto justify-center boder border-white border-opacity-10 bg-[#222] shadow-xl px-4 py-2 rounded-lg font-semibold">
            <p
              className={`flex-1 ${
                isVideo &&
                "border-opacity-40 bg-black border border-white shadow-lg"
              } rounded-md text-center py-1 cursor-pointer transition-all duration-300`}
              onClick={() => setIsVideo(true)}
            >
              Video
            </p>
            <p
              className={`flex-1 ${
                !isVideo &&
                "border-opacity-40  border border-white shadow-lg bg-black"
              }    rounded-md text-center py-1 cursor-pointer transition-all duration-300`}
              onClick={() => setIsVideo(false)}
            >
              Images
            </p>
          </div>
          <div className="mt- w-1/ self-stretch lg:mt-0 rounded-xl self-ceter justify-self-center overflow-hidden pb-8 border border-white border-opacity-10 bg-[#22]">
            <h4 className="font-bold text-xl px-4 bg-[#222] py-2 border-b border-white border-opacity-20">
              Project Details
            </h4>
            <div className="space-y-3 text-sm lg:text-md px-4 pt-4">
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
              <p className="flex items-start gap-2">
                <span className="font-bold text-xl leading-none">About:</span>{" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti suscipit veritatis totam quis amet modi dolorem, ipsam
                voluptatibus quo ratione, perspiciatis in sapiente dicta sit ea
                quidem excepturi atque. Maxime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
