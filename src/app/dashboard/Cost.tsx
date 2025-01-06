"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface ProjectData {
  name: string;
  structure: string;
  contractSum: string;
  amountPaid: string;
  lastPayment: string;
  date: string;
  balanceOwed: string;
}

export default function Cost() {
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
      .catch((error) => console.error("Error fetching the CSV:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="bg-black flex flex-col xl:px-10 md:px-10 px-3 xl:pt-32 pt-32 sm:pb-20 pb-10 h-fit bg-cover bg-center mb-0 xl:gap-10 gap-0 ">
      <h1 className="text-white text-sm xl:text-xl font-bold">
        Welcome, Mr. {data.name}
      </h1>

      <div className="flex flex-col">
        <h2 className="text-white text-base xl:text-4xl uppercase xl:mb-10 mb-5">
          Project Summary for {data.structure}
        </h2>

        <div className="flex flex-row justify-between xl:gap-0 md:gap-5 gap-2">
          <div className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:w-1/4 w-1/3 h-auto py-3 px-5 border border-white border-solid rounded-md">
            <p className="text-white text-xs md:text-lg xl:text-2xl font-bold">
              CONTRACT SUM
            </p>
            <p className="text-white text-sm md:text-base xl:text-xl font-normal">
              N{data.contractSum}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center xl:w-1/4 w-1/3 h-auto py-3 px-5 border border-white border-solid rounded-md">
            <div className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:mb-7 mb-3">
              <p className="text-white text-xs md:text-lg xl:text-2xl font-bold">
                AMOUNT PAID
              </p>
              <p className="text-white text-sm md:text-base xl:text-xl font-normal">
                N{data.amountPaid}
              </p>
            </div>

            <p className="text-white text-xs md:text-sm xl:text-lg font-normal mb-3">
              Last payment: <span>N{data.lastPayment}</span>
            </p>

            <p className="text-white text-xs md:text-sm xl:text-lg font-normal">
              Date: <span>{data.date}</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center xl:gap-5 gap-1 xl:w-1/4 w-1/3 h-auto py-3 px-5 border border-white border-solid rounded-md">
            <p className="text-white text-xs md:text-lg xl:text-2xl font-bold">
              BALANCE OWED
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
