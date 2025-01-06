"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

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
  videoUrl: string;
}

export default function ProjectProgress() {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSeI27nI6lm30uvRmeWMT9v6MqGaCt3Ut8wA-mnthGHWA2bYPzTs76xi8gqHz4S6YIsgBUP44Y0gaBN/pub?gid=1426545445&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedResult = Papa.parse<ProjectData>(csvData, { header: true });
        const parsedData = parsedResult.data as ProjectData[];
        setData(parsedData[0]);
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex flex-col  xl:px-10 md:px-10 px-3 sm:py-20 py-10">
      <h2 className="text-black text-base xl:text-4xl uppercase xl:mb-10 mb-5">
        Project Progress
      </h2>

      <div className="overflow-x-auto xl:mb-20 mb-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase border-r border-gray-300">
                Work
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase border-r border-gray-300">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white">
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.work1}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.status1}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {data.details1}
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.work2}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.status2}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {data.details2}
              </td>
            </tr>

            <tr className="bg-white">
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.work3}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.status3}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {data.details3}
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.work4}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                {data.status4}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {data.details4}
              </td>
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
        <div className="aspect-w-16 aspect-h-9">
          <video controls className="w-full h-60 xl:h-96">
            <source src="/videos/sample.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="text-black text-base xl:text-4xl uppercase xl:mb-10 mb-5">
          Watch your baby grow...
        </p>
      </div>
    </div>
  );
}
