'use client'; // Mark this file as a Client Component

import dynamic from "next/dynamic";

const NigerianMapComponent = dynamic(() => import("./NigerianMap"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

export default function NigerianMapWrapper() {
  return <NigerianMapComponent />;
}
