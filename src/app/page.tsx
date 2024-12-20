// src/pages/Home.tsx
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BottomSection } from "@/components/BottomSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BottomSection />
    </main>
  );
}

