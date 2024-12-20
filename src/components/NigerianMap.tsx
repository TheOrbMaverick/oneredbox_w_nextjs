"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function NigerianMap() {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  useEffect(() => {
    fetch("/nigeriaGeoJson.geojson") // File in public folder
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data))
      .catch((error) => console.error("Failed to load GeoJSON:", error));
  }, []);

  const nigeriaBounds: [[number, number], [number, number]] = [
    [4.2704, 2.6769], // Southwest corner
    [13.893, 14.6776], // Northeast corner
  ];

  const handleStateClick = (stateFeature: any) => {
    // Handle state click logic
  };

  const onEachState = (feature: any, layer: any) => {
    layer.on({
      click: handleStateClick,
    });
    layer.bindPopup(`State: ${feature.properties.name}`);
  };

  return (
    <MapContainer
      center={[9.072264, 7.491302]}
      zoom={6}
      minZoom={6}
      maxZoom={16}
      maxBounds={nigeriaBounds}
      maxBoundsViscosity={1.0}
      className="h-screen w-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={{
            color: "#000000", // Boundary color (red)
            weight: 3,        // Line thickness
            fillOpacity: 0,   // No interior fill color
          }}
          onEachFeature={onEachState}
        />
      )}
    </MapContainer>
  );
}
