"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface ProjectData {
  id: string;
  contractSum: string;
  amountPaid: string;
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
  videoUrl: string;
}

interface ProjectProgressProps {
  selectedId: string;
}

export default function ProjectProgress({ selectedId }: ProjectProgressProps) {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSeI27nI6lm30uvRmeWMT9v6MqGaCt3Ut8wA-mnthGHWA2bYPzTs76xi8gqHz4S6YIsgBUP44Y0gaBN/pub?gid=1426545445&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedResult = Papa.parse<ProjectData>(csvData, { header: true });
        const parsedData = parsedResult.data as ProjectData[];
        const filteredData = parsedData.find((row) => row.id === selectedId);
        setData(filteredData || null);
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, [selectedId]);

  if (!data) return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p className="text-white text-lg">Loading...</p>
    </div>
  );

  const contractSum = parseFloat(data?.contractSum || "0");
  const amountPaid = parseFloat(data?.amountPaid || "0");
  const completionPercentage = contractSum > 0 ? (amountPaid / contractSum) * 100 : 0;

  const barColor =
    completionPercentage === 100
      ? "green"
      : completionPercentage > 50
      ? "yellow"
      : "red";

  return (
    <div className="flex flex-col  xl:px-10 md:px-10 px-3 sm:py-20 py-10">
      <h2 className="text-white font-bold text-base xl:text-4xl uppercase xl:mb-10 mb-5">
        Project Progress
      </h2>

      <div className="mb-5">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600">
                {Math.round(completionPercentage)}%
              </span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="relative flex w-full">
              <div
                className="flex mb-2 text-xs leading-none font-semibold justify-center text-center whitespace-nowrap align-center text-teal-100"
                style={{
                  width: `${completionPercentage}%`,
                }}
              >
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap align-center text-teal-100"
                  style={{
                    width: "100%",
                    background: barColor,
                    borderRadius: "0.25rem",
                    height: "8px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto xl:mb-20 mb-10 ">
        <table
          className="min-w-full  md:mb-20 mb-10 shadow-xl shadow-slate-950"
          style={{ backgroundColor: "#171D1D" }}
        >
          <thead>
            <tr className="" style={{ backgroundColor: "#171D1D" }}>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase border-r border-gray-300">
                Work
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase border-r border-gray-300">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-slate-950">
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.work1}
              </td>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.status1}
              </td>
              <td className="px-6 py-4 text-sm text-white">{data.details1}</td>
            </tr>

            <tr className="" style={{ backgroundColor: "#171D1D" }}>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.work2}
              </td>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.status2}
              </td>
              <td className="px-6 py-4 text-sm text-white">{data.details2}</td>
            </tr>

            <tr className="bg-slate-950">
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.work3}
              </td>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.status3}
              </td>
              <td className="px-6 py-4 text-sm text-white">{data.details3}</td>
            </tr>

            <tr className="" style={{ backgroundColor: "#171D1D" }}>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.work4}
              </td>
              <td className="px-6 py-4 text-sm text-white border-r border-gray-300">
                {data.status4}
              </td>
              <td className="px-6 py-4 text-sm text-white">{data.details4}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        {/* Depending on which video you want, just comment the other out */}

        {/* Youtube video */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={data.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-60 xl:h-96"
          ></iframe>
        </div>

        {/* Uploaded video */}
        {/* <div className="aspect-w-16 aspect-h-9">
          <video controls className="w-full h-60 xl:h-96">
            <source src="/videos/sample.mp4" type="video/mp4" />
          </video>
        </div> */}
        <p className="text-white text-base xl:text-4xl xl:mb-10 mb-5">
          Captured live feed from your site.
        </p>
        <p className="text-white text-base xl:text-4xl xl:mb-10 mb-5">
          To view full playlist of your project, click{" "}
          <a href="https://www.youtube.com/watch?v=fikxL67IoXs&list=PLtVp31s9xtug5EgTrS7ceoxGSYZFi_MTV" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            here
          </a>
        </p>
      </div>
    </div>
  );
}
