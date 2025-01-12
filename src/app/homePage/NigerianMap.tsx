"use client";

import dynamic from "next/dynamic";

// Dynamically import the component to ensure it only runs on the client
const NigerianMapComponent = dynamic(() => import("@/components/NigerianMapContent"), {
  ssr: false, // Disable server-side rendering
});

export default function NigerianMap() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">
        Nigerian Map Component
      </h1>
      <NigerianMapComponent />
    </div>
  );
}
