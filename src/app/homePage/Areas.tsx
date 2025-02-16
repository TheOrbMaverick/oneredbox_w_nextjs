"use client";
import AreaFilter from "@/components/area-filter";
// import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";

const areas = [
  { state: "Lagos", area: "Ikeja", cost: "Coming soon" },
  { state: "Lagos", area: "Victoria Island", cost: "Coming soon" },
  { state: "Lagos", area: "Surulere", cost: "Coming soon" },
  { state: "Abuja", area: "Garki", cost: "Coming soon" },
  { state: "Abuja", area: "Wuse", cost: "Coming soon" },
  { state: "Abuja", area: "Maitama", cost: "Coming soon" },
  { state: "Kano", area: "Fagge", cost: "Coming soon" },
  { state: "Kano", area: "Tarauni", cost: "Coming soon" },
  { state: "Kano", area: "Gwale", cost: "Coming soon" },
  { state: "Rivers", area: "Port Harcourt", cost: "Coming soon" },
  { state: "Rivers", area: "Obio-Akpor", cost: "Coming soon" },
  { state: "Rivers", area: "Eleme", cost: "Coming soon" },
  { state: "Oyo", area: "Ibadan North", cost: "Coming soon" },
  { state: "Oyo", area: "Ibadan South-West", cost: "Coming soon" },
  { state: "Oyo", area: "Ogbomosho", cost: "Coming soon" },
  { state: "Kaduna", area: "Kaduna North", cost: "Coming soon" },
  { state: "Kaduna", area: "Kaduna South", cost: "Coming soon" },
  { state: "Kaduna", area: "Zaria", cost: "Coming soon" },
  { state: "Enugu", area: "Enugu North", cost: "Coming soon" },
  { state: "Enugu", area: "Enugu South", cost: "Coming soon" },
  { state: "Enugu", area: "Nsukka", cost: "Coming soon" },
  { state: "Delta", area: "Warri", cost: "Coming soon" },
  { state: "Delta", area: "Asaba", cost: "Coming soon" },
  { state: "Delta", area: "Ughelli", cost: "Coming soon" },
  { state: "Anambra", area: "Awka", cost: "Coming soon" },
  { state: "Anambra", area: "Onitsha", cost: "Coming soon" },
  { state: "Anambra", area: "Nnewi", cost: "Coming soon" },
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
          <p>₦ Price/sq.m</p>
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
                        {item.cost}
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
                    <p>{item.cost}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
