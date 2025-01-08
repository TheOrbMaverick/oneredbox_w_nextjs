import React from "react";
import { Hero } from "./Hero";
import NigerianMapComponent from "./NigerianMap";
import Testimonials from "./Testimonials";
import Form from "./Form";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <NigerianMapComponent />
      <Testimonials />
      <Form />
    </div>
  );
}
