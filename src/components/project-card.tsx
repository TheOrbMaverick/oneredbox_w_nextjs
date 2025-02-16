import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

interface IProject {
  title: string;
  video: string;
  images: string[];
  client: string;
  date?: string;
  location: string;
  about: string;
}

export default function ProjectCard({
  title,
  video,
  images,
  client,
  date,
  location,
  about,
}: IProject) {
  const [isVideo, setIsVideo] = useState<boolean>(false);
  return (
    <>
      <div className="w-1/ bg-[#222] bg-opacity-30 shadow-lg shadow-gray-800 border border-white border-opacity-10 px-6 lg:px-12 py-4 rounded-2xl">
        <h3 className="font-bold text-2xl mb-6">{title}</h3>

        <div className="flex gap-3 lg:gap-12 bordr flex-col lg:flex-row">
          {/*  */}
          <div className="lg:w-1/2 h-full">
            <div className="flex gap-3 flex-col">
              <div className="flex-1">
                {isVideo ? (
                  <video
                    src={video}
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
                    {images.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-[216px] lg:h-[300px] rounded-2xl overflow-hidden order border-white border-opacity-50">
                          <Image
                            src={item}
                            fill={true}
                            alt="Image"
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="flex gap-4  justify-center boder border-white border-opacity-10 bg-[#222] shadow-xl px-4 py-2 rounded-lg font-semibold">
                <p
                  className={`flex-1 ${
                    isVideo && "border-opacity-40 border border-white shadow-lg"
                  } rounded-md text-center py-1 cursor-pointer transition-all duration-300`}
                  onClick={() => setIsVideo(true)}
                >
                  Video
                </p>
                <p
                  className={`flex-1 ${
                    !isVideo &&
                    "border-opacity-40 border border-white shadow-lg"
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
            <div className="space-y-3 lg:text-lg text-sm px-4 pt-4">
              <p>
                <span className="font-bold text-xl">Client:</span> {client}
              </p>
              <p>
                <span className="font-bold text-xl">Date:</span> {date}
              </p>
              <p>
                <span className="font-bold text-xl">Location:</span> {location}
              </p>
              <p className="flex lg:block items-start gap-2">
                <span className="font-bold text-xl leading-none">About:</span>{" "}
                {about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
