"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface ProjectData {
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

export default function Cost({ selectedId }: CostProps) {
  const [data, setData] = useState<ProjectData | null>(null);

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

  if (!data) return <p className="text-white">Loading...</p>;

  return (
    <section className="bg-black flex flex-col xl:px-10 md:px-10 px-3 xl:pt-20 pt-20 sm:pb-20 pb-10 h-fit bg-cover bg-center mb-0 xl:gap-10 gap-0 ">
      <h1 className="text-white text-sm md:text-xl font-bold mb-5">
        Welcome, Mr. {data.name}
      </h1>

      <div className="flex flex-col  ">
        <h2 className="text-white text-base md:text-4xl text-start uppercase xl:mb-14 mb-7 font-bold">
          Project Summary for {data.structure}
        </h2>

        <div className="flex flex-row w-full justify-between  xl:gap-3 md:gap-5 gap-2">
          <div
            className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:w-1/3 w-1/3 h-auto py-3 px-5  shadow-lg shadow-slate-950 rounded-xl"
            style={{ backgroundColor: "#171D1D" }}
          >
            <p className="text-white text-xs md:text-lg xl:text-2xl text-center font-bold">
              CONTRACT SUM
            </p>
            <p className="text-white text-sm md:text-base xl:text-xl font-normal">
              N{data.contractSum}
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center xl:w-1/3 w-1/3 h-auto py-3 px-5 shadow-lg shadow-slate-950 rounded-xl"
            style={{ backgroundColor: "#171D1D" }}
          >
            <div className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:mb-7 mb-3">
              <p className="text-white text-xs md:text-lg xl:text-2xl text-center font-bold">
                AMOUNT PAID
              </p>
              <p className="text-white text-sm md:text-base xl:text-xl font-normal">
                N{data.amountPaid}
              </p>
            </div>

            <p className="text-white text-xs md:text-sm xl:text-lg text-center font-normal mb-3">
              Last payment: <span>N{data.lastPayment}</span>
            </p>

            <p className="text-white text-xs md:text-sm xl:text-lg text-center font-normal">
              Date: <span>{data.date}</span>
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:w-1/3 w-1/3 h-auto py-3 px-5 shadow-lg shadow-slate-950 rounded-xl"
            style={{ backgroundColor: "#171D1D" }}
          >
            <p className="text-white text-xs md:text-lg xl:text-2xl text-center font-bold">
              BALANCE 
            </p>
            <p className="text-white text-sm md:text-base xl:text-xl font-normal">
              N{data.balanceOwed}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
