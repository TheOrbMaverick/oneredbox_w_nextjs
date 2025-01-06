import React from "react";
import { Hero } from "./Hero";
import NigerianMapComponent from "./NigerianMap";
import Testimonials from "./Testimonials";
import Form from "./Form";
import { BottomSection } from "@/components/BottomSection";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <NigerianMapComponent />
      <Testimonials />
      <Form />
      <BottomSection />
    </div>
  );
}
