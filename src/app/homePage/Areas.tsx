"use client";
import AreaFilter from "@/components/area-filter";
// import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";

const areas = [
  { state: "Lagos", area: "Ikeja" },
  { state: "Lagos", area: "Victoria Island" },
  { state: "Lagos", area: "Surulere" },
  { state: "Abuja", area: "Garki" },
  { state: "Abuja", area: "Wuse" },
  { state: "Abuja", area: "Maitama" },
  { state: "Kano", area: "Fagge" },
  { state: "Kano", area: "Tarauni" },
  { state: "Kano", area: "Gwale" },
  { state: "Rivers", area: "Port Harcourt" },
  { state: "Rivers", area: "Obio-Akpor" },
  { state: "Rivers", area: "Eleme" },
  { state: "Oyo", area: "Ibadan North" },
  { state: "Oyo", area: "Ibadan South-West" },
  { state: "Oyo", area: "Ogbomosho" },
  { state: "Kaduna", area: "Kaduna North" },
  { state: "Kaduna", area: "Kaduna South" },
  { state: "Kaduna", area: "Zaria" },
  { state: "Enugu", area: "Enugu North" },
  { state: "Enugu", area: "Enugu South" },
  { state: "Enugu", area: "Nsukka" },
  { state: "Delta", area: "Warri" },
  { state: "Delta", area: "Asaba" },
  { state: "Delta", area: "Ughelli" },
  { state: "Anambra", area: "Awka" },
  { state: "Anambra", area: "Onitsha" },
  { state: "Anambra", area: "Nnewi" },
];

const areasList = [...new Set(areas.map((area) => area.state))];
console.log("Area List", areasList);

export default function Areas() {
  const tableRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("All");
  return (
    <div className="text-white py-6 relative px-4 lg:px-10">
      <div className="max-w-[800px mx-auto boder space--6">
        <AreaFilter
          statesList={areasList}
          setFilter={setFilter}
          filter={filter}
        />
        <div className="text-2xl pb-6 shadow-lg shadow-[#22]  font-bold grid grid-cols-3 text-center justify-between py-3 border-b border-white border-opacity-25 px-5 bg-[#222] rounded-t-lg">
          <p>State</p>
          <p>Area</p>
          <p>Price</p>
        </div>

        <div className="max-h-[400px] relative bordr overflow-y-scroll [&::-webkit-scrollbar]:hidden border border-t-transparent border-white border-opacity-25 pb-8 rounded-b-lg">
          <div ref={tableRef}>
            {filter !== "All" ? (
              <>
                {areas
                  .filter((item) => item.state === filter)
                  .map((item, i) => (
                    <div
                      key={i}
                      className={`${
                        i % 2 !== 0 ? "bg-[#222]" : ""
                      } px-6 grid grid-cols-3 border-b border-white border-opacity-20   text-center justify-between py-3  lg:text-xl`}
                    >
                      <p>{item.state}</p>
                      <p>{item.area}</p>
                      <p>
                        <span>&#8358;</span>100
                      </p>
                    </div>
                  ))}
              </>
            ) : (
              <>
                {areas.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 !== 0 ? "bg-[#222]" : ""
                    } px-6 grid grid-cols-3 border-b border-white border-opacity-20   text-center justify-between py-3  lg:text-xl`}
                  >
                    <p>{item.state}</p>
                    <p className="border-x border-white border-opacity-20">
                      {item.area}
                    </p>
                    <p>$100</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {/* <div
          onClick={() => {}}
          className="absolute bottom-0 translate-y-1/2 z-20 flex left-1/2 bg-opacity-70 -translate-x-1/2 bg-white items-center justify-center h-10 w-10 rounded-full"
        >
          <ChevronDown className="stroke-black" size={40} />
        </div> */}
      </div>
    </div>
  );
}
