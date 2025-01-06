import { BottomSection } from "@/components/BottomSection";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Cost from "./Cost";
import ProjectProgress from "./ProjectProgress";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Cost />
      <ProjectProgress />
      <BottomSection />
    </div>
  );
}
