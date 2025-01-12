import React from "react";
import { Hero } from "./Hero";
import Testimonials from "./Testimonials";
import Form from "./Form";
import { Navbar } from "@/components/Navbar";
import NigerianMapWrapper from "./NigerianMapWrapper";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <NigerianMapWrapper />
      <Testimonials />
      <Form />
    </div>
  );
}
