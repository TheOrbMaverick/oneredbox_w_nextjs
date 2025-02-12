"use client";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Cost from "./Cost";
import ProjectProgress from "./ProjectProgress";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [selectedId, setSelectedId] = useState("");
  const [submittedId, setSubmittedId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const savedId = localStorage.getItem("submittedId");
    if (savedId) {
      setSubmittedId(savedId);
    } else {
      setSubmittedId("");
    }
  }, []);

  useEffect(() => {
    if (!submittedId) {
      localStorage.removeItem("submittedId");
      router.push("/dashboard");
    }
  }, [submittedId, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedId(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedId.trim()) {
      setSubmittedId(selectedId.trim());
      localStorage.setItem("submittedId", selectedId.trim());
      console.log("Submitted ID:", submittedId);
    }
  };

  // const handleBack = () => {
  //   localStorage.removeItem("submittedId");
  //   setSubmittedId("");
  //   router.push("/");
  // };

  useEffect(() => {
    const savedId = localStorage.getItem("submittedId");
    if (!savedId) {
      setSubmittedId("");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen borer border-white w-full overflow-x-hidden pb-20">
      <Navbar />
      {/* sm:px-60 md:px-20 */}
      <div className="mt-20 px-4 lg:px-24  text-white">
        {/* <button
            onClick={handleBack}
            className="-mb-40 mx-10 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Back
          </button> */}
        <Cost selectedId={"1A"} />
        {/* <ProjectProgress selectedId={"1A"} /> */}
      </div>
      {/* {submittedId ? (
      ) : (
        <div className="flex flex-grow flex-col items-center justify-center p-5">
          <div className="flex flex-col items-center p-5 rounded-lg shadow-md">
            <label
              htmlFor="id-input"
              className="block sm:text-2xl text-lg font-bold text-white "
            >
              Enter ID:
            </label>

            <input
              id="id-input"
              type="text"
              value={selectedId}
              onChange={handleInputChange}
              className="mt-1 mb-5 block w-full py-1 px-3 rounded-md border-gray-300 shadow-sm shadow-slate-700 focus:outline-none sm:text-xl text-base"
              placeholder="Enter ID Number"
            />

            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-black border-white border-solid border text-white rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
