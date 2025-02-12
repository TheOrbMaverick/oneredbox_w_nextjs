"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
// import SemiCircleProgress from "@/components/circular-progress-bar";
import CircularProgress from "@/components/circular-progress-bar";
import {
  ChartColumnDecreasing,
  ChartColumnIncreasing,
  ChartLine,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import Link from "next/link";

interface ProjectData {
  work1: string;
  status1: string;
  details1: string;
  work2: string;
  status2: string;
  details2: string;
  work3: string;
  status3: string;
  details3: string;
  work4: string;
  status4: string;
  details4: string;
  id: string;
  name: string;
  structure: string;
  contractSum: string;
  amountPaid: string;
  lastPayment: string;
  date: string;
  balanceOwed: string;
}

interface CostProps {
  selectedId: string;
}

const date = new Date();

export default function Cost({ selectedId }: CostProps) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<any>(null);
  const [isVideo, setIsVideo] = useState<boolean>(true);

  useEffect(() => {
    console.log("Fetching data for ID:", selectedId);
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSeI27nI6lm30uvRmeWMT9v6MqGaCt3Ut8wA-mnthGHWA2bYPzTs76xi8gqHz4S6YIsgBUP44Y0gaBN/pub?gid=1426545445&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedResult = Papa.parse<ProjectData>(csvData, { header: true });
        const parsedData = parsedResult.data as ProjectData[];
        const filteredData = parsedData.find((row) => row.id === selectedId);
        console.log("Filtered Data:", filteredData);
        setData(filteredData || null);
      })
      .catch((error) => console.error("Error fetching the CSV:", error));
  }, [selectedId]);

  if (!data) return <p className="text-white"></p>;

  return (
    <section className="bg-black flex flex-col text-white">
      <div className="text-white mb-5 flex flex-wrap justify-between items-baseline text-2xl font-bold">
        <h3 className="bg-[#222] border py-4 px-8 rounded-2xl border-white border-opacity-20">
          Welcome <span className=" undrline text-2xl">{data.name}</span>
        </h3>

        <Link
          href={"#"}
          className="border hidden lg:block border-white border-opacity-30 text-base px-6 py-2 rounded-lg shadow-sm bg-black shadow-gray-400"
        >
          Site Videos
        </Link>
      </div>
      <div className="flex gap-8 bor flex-col lg:flex-row">
        <div className="text-white px-5 flex-1 py-5 rounded-3xl bg-white bg-opacity-10 border border-white border-opacity-30 shadow-lg">
          <div className="flex justify-between flex-col lg:flex-row items-baseline">
            <h2 className="text-4xl font-bold mb-6">{data.structure}</h2>
            <p className="text-xl lg:text-2xl font-medium lg:font-bold mb-6 border border-white border-opacity-15 px-4 py-2 rounded-md">
              {data.date}
            </p>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div className="px-6 py-7 bg-[#222] shadow-xl border border-white border-opacity-10 bg-opacity-20 rounded-xl space-y-3 flex-1">
              <div className="w-14 h-14 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <ChartColumnIncreasing className="stroke-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">Contract Sum</h3>
                  <p className="text-xl lg:text-2xl font-extrabold">
                    $ {data.contractSum}
                  </p>
                </div>
                <div className="w-[80px]">
                  <CircularProgress
                    percentage={100}
                    color="#008000"
                    colorOpacity="#00800080"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-7 bg-[#222] shadow-xl border border-white border-opacity-10 bg-opacity-20 rounded-xl space-y-3 flex-1">
              <div className="w-14 h-14  bg-green-500 border border-green-400 border-opacity-50 bg-opacity-15 rounded-full flex items-center justify-center stroke-green-500">
                <ChartLine className="stroke-green-500 " />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">Funds Paid</h3>
                  <p className="text-2xl font-extrabold">$ {data.amountPaid}</p>
                </div>
                <div className="w-[80px]">
                  <CircularProgress
                    percentage={50}
                    color="#008000"
                    colorOpacity="#00800080"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-7 bg-[#222] shadow-xl border border-white border-opacity-10 bg-opacity-20 rounded-xl space-y-3 flex-1">
              <div className="w-14 h-14 bg-red-500 bg-opacity-20 border border-red-400 border-opacity-50 rounded-full flex justify-center items-center">
                <ChartColumnDecreasing className="stroke-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">Amount Due</h3>
                  <p className="text-xl lg:text-2xl font-extrabold">
                    $ {data.contractSum}
                  </p>
                </div>
                <div className="w-[80px]">
                  <CircularProgress
                    percentage={40}
                    color="#FF0000"
                    colorOpacity="#FF000080"
                  />
                </div>
              </div>
            </div>
            {/* <div className="px-6 py-7 bg-[#222] shadow-xl border border-white border-opacity-10 bg-opacity-20 rounded-xl space-y-3 flex-1">
              <div className="w-14 h-14 bg-green-500 bg-opacity-20 border border-green-400 border-opacity-50 flex items-center justify-center rounded-full">
                <ChartColumnStacked className="stroke-green-500" />
              </div>
              <h3 className="text-xl textcenter font-bold">Last Payment</h3>
              <p className="text-2xl font-extrabold">$ {data.lastPayment}</p>
            </div> */}
          </div>
          <h3 className="mt-6 mb-3 font-bold text-2xl">Project Updates</h3>
          <div className="boder rounded-t-2xl text-sm lg:text-base overflow-hidden">
            <div className="grid grid-cols-4 font-bold text-xl px-5 py-3 border-b border-white border-opacity-20 bg-[#222]">
              <p>S/N</p>
              <p>Work</p>
              <p>Status</p>
              <p>Details</p>
            </div>

            <div className="grid grid-cols-4 px-5 py-2">
              <p>1</p>
              <p>{data.work1}</p>
              <p>{data.status1}</p>
              <p>{data.details1}</p>
            </div>

            <div className="grid grid-cols-4 px-5 py-2">
              <p>2</p>
              <p>{data.work2}</p>
              <p>{data.status2}</p>
              <p>{data.details2}</p>
            </div>

            <div className="grid grid-cols-4 px-5 py-2">
              <p>3</p>
              <p>{data.work3}</p>
              <p>{data.status3}</p>
              <p>{data.details3}</p>
            </div>
            <div className="grid grid-cols-4 px-5 py-2">
              <p>4</p>
              <p>{data.work4}</p>
              <p>{data.status4}</p>
              <p>{data.details4}</p>
            </div>
          </div>
        </div>

        <div className="borer w-full lg:w-[400px] h-full ">
          {isVideo ? (
            <>
              <Link
                href={"#"}
                className="border lg:hidden inline-block mb-4 border-white border-opacity-30 text-base px-6 py-2 rounded-lg shadow-sm bg-black shadow-gray-400"
              >
                Site Videos
              </Link>
              <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[200px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                <video
                  src="/videos/sample.mp4"
                  className="w-full h-full object-cover"
                  controls
                />
              </div>
            </>
          ) : (
            <Swiper modules={[Navigation]} navigation allowTouchMove={true}>
              <SwiperSlide>
                <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[200px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image
                    src={"/images/construction.png"}
                    fill={true}
                    alt="Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[200px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image
                    src={"/images/construct.jpg"}
                    fill={true}
                    alt="Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[200px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image src={"/images/heroImg.jpg"} fill={true} alt="Image" />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          <div className="flex gap-4 justify-center border border-white border-opacity-10 bg-[#222] shadow-xl px-4 py-2 rounded-lg mt-4 font-semibold">
            <p
              className={`flex-1 ${
                isVideo &&
                "border-opacity-40 bg-[#222] border border-white shadow-lg"
              } rounded-md text-center py-1 cursor-pointer transition-all duration-500`}
              onClick={() => setIsVideo(true)}
            >
              Video
            </p>
            <p
              className={`flex-1 ${
                !isVideo &&
                "border-opacity-40 bg-[#222] border border-white shadow-lg"
              }    rounded-md text-center py-1 cursor-pointer transition-all duration-500`}
              onClick={() => setIsVideo(false)}
            >
              Images
            </p>
          </div>
          {/*  */}
          <div className="mt-4 rounded-t-xl self-center justify-self-center overflow-hidden pb-4 border border-white border-opacity-10 bg-[#22]">
            <h4 className="font-bold text-xl px-4 bg-[#222] py-2 border-b border-white border-opacity-20">
              Project Details
            </h4>
            <div className="space-y-3 text-base lg:text-md px-4 pt-4">
              <p>
                <span className="font-bold text-xl">Client:</span> Client Name
              </p>
              <p>
                <span className="font-bold text-xl">Location:</span> Project
                Location
              </p>
              <p className="flex lg:block items-start gap-2">
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
      {/*  */}
      {/* <div className="flex gap-12 flex-col-reverse lg:flex-row mt-8">
        <div className="lg:w-1/2 bordr rounded-xl h-[400px]">
          <video
            src="/videos/sample.mp4"
            className="w-full h-full rounded-xl object-cover shadow-md border border-white border-opacity-50 shadow-[#ffffff22]"
            controls
            autoPlay
          ></video>
        </div>
        <div className="w-full lg:w-1/2 h-[200px] lg:h-[400px] relative">
          <div className="next absolute top-1/2 bg-white right-0 translate-x-1/4 z-20 bg-opacity-65 rounded-full w-12 h-12 flex justify-center items-center -translate-y-1/2">
            <ChevronRight className="stroke-[#222]" size={48} />
          </div>
          <div className="prev absolute top-1/2 bg-white z-20 rounded-full bg-opacity-65 -translate-x-1/4 w-12 h-12 flex justify-center items-center -translate-y-1/2">
            <ChevronLeft className="stroke-[#222]" size={48} />
          </div>
          <div className="h-full boder">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              pagination={{ enabled: true, clickable: true }}
              navigation={{ enabled: true, nextEl: ".next", prevEl: ".prev" }}
              scrollbar={{ enabled: true }}
              // autoplay={{ delay: 4000 }}
            >
              <SwiperSlide style={{ width: "100%" }}>
                <div className="relative bordr w-full h-[200px] sm:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image
                    src={"/images/construction.png"}
                    fill={true}
                    alt="Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image
                    src={"/images/construct.jpg"}
                    fill={true}
                    alt="Image"
                    className="objext-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-white border-opacity-50">
                  <Image
                    src={"/images/heroImg.jpg"}
                    fill={true}
                    alt="Image"
                    className="objext-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div> */}
      {/*  */}
      {/* <div className="text-white">{JSON.stringify(data)}</div> */}
    </section>
  );
}
