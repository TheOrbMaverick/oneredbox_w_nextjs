import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AreaFilter({
  statesList,
  setFilter,
  filter,
}: {
  filter: string;
  statesList: string[];
  setFilter: (e: string) => void;
}) {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div className="flex justify-between mb-6 relative">
      {/* <div className="w-[500px] h-[56px] bg-[#222] rounded-lg"></div> */}
      <div
        onClick={() => setShowFilter((p) => !p)}
        className="inline-flex min-w-80 h-[56px] bg-[#222] shadow-lg bg-opacity-80  rounded-lg relative items-center gap-2 justify-between px-4"
      >
        <p className="borde text-lg font-bold flex-1 h-ful">{filter}</p>
        <ChevronDown />
        {showFilter && (
          <div className="absolute top-full border-b right-0 bg-[#222] w-full border border-white border-opacity-30 shadow-2xl px-4 py-6 rounded-xl  z-40">
            <div className="space-y-1 text-md min border-b  w-[full] h-[300px] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
              {filter !== "All" && (
                <p
                  onClick={() => setFilter("All")}
                  className="cursor-pointer font-medium"
                >
                  All
                </p>
              )}
              {statesList.map((area, i) => (
                <p
                  key={i}
                  onClick={() => setFilter(area)}
                  className="cursor-pointer font-medium"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
