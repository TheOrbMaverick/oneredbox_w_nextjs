"use client";

import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";

export default function NigerianMapComponent() {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const previousLayerRef = useRef<any>(null); // To keep track of the previously clicked layer

  useEffect(() => {
    fetch("/nigeriaGeoJson2.geojson")
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data))
      .catch((error) => console.error("Failed to load GeoJSON:", error));
  }, []);

  const nigeriaBounds: [[number, number], [number, number]] = [
    [4.2704, 2.6769],
    [13.893, 14.6776],
  ];

  const handleStateClick = (e: any, map: any) => {
    const clickedLayer = e.target;

    // Reset style of the previously clicked layer
    if (previousLayerRef.current) {
      previousLayerRef.current.setStyle({
        color: "#ff0000",
        weight: 2,
        fillColor: "#ff0000",
        fillOpacity: 0.2,
      });
    }

    // Set style for the newly clicked layer
    clickedLayer.setStyle({
      color: "#0000ff",
      weight: 4,
      fillColor: "#00ff00",
      fillOpacity: 0,
    });

    // Bring the clicked layer to the front
    clickedLayer.bringToFront();

    // Store the currently clicked layer
    previousLayerRef.current = clickedLayer;

    // Zoom to the bounds of the clicked layer
    const bounds = clickedLayer.getBounds();
    map.fitBounds(bounds);
  };

  const onEachState = (feature: any, layer: any, map: any) => {
    layer.on({
      click: (e: any) => handleStateClick(e, map),
    });
    layer.bindPopup(`State: ${feature.properties.name}`);
  };

  const GeoJSONLayer = ({ data }: { data: any }) => {
    const map = useMap();
    return (
      <GeoJSON
        data={data}
        style={{
          color: "#ff0000",
          weight: 2,
          fillColor: "#ff0000",
          fillOpacity: 0.2,
        }}
        onEachFeature={(feature, layer) => onEachState(feature, layer, map)}
      />
    );
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
      {geoJsonData && <GeoJSONLayer data={geoJsonData} />}
    </MapContainer>
  );
}
