"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useState } from "react";
// import MarkerClusterGroup from "react-leaflet-cluster";

import { statesData } from "../nigeriaGeoJson2";

export default function NigerianMapComponent() {
  const [selectedState, setSelectedState] = useState<"Lagos" | "Abuja" | null>(
    null
  );

  const lagosPins: { geocode: [number, number]; popUp: string }[] = [
    { geocode: [6.5244, 3.3792], popUp: "Lagos Pin 1 (Lagos Island)" },
    { geocode: [6.45, 3.4], popUp: "Lagos Pin 2 (Mainland)" },
    { geocode: [6.5, 3.45], popUp: "Lagos Pin 3 (Ikeja)" },
    { geocode: [6.6, 3.5], popUp: "Lagos Pin 4 (Agege)" },
    { geocode: [6.4, 3.0], popUp: "Lagos Pin 5 (Agbara)" },
    { geocode: [6.8, 3.6], popUp: "Lagos Pin 6 (Epe)" },
    { geocode: [6.7, 3.5], popUp: "Lagos Pin 7 (Lekki)" },
  ];

  const abujaPins: { geocode: [number, number]; popUp: string }[] = [
    { geocode: [9.0563, 7.4985], popUp: "Abuja Pin 1 thid is a place that I really like and everything there makes perfect sense to me is this the only way to edit this" },
    { geocode: [9.1, 7.5], popUp: "Abuja Pin 2" },
  ];

  const customIcon = new Icon({
    iconUrl: "/images/oneLogo.svg",
    iconSize: [30, 30],
  });

  const stateCoordinates: {
    Lagos: [number, number];
    Abuja: [number, number];
  } = {
    Lagos: [6.5244, 3.3792],
    Abuja: [9.0765, 7.3986],
  };

  function ZoomHandler({ state }: { state: "Lagos" | "Abuja" | null }) {
    const map = useMap();

    if (state) {
      const zoomLevel = 10;
      map.setView(stateCoordinates[state], zoomLevel);
    }

    return null;
  }

  return (
    <div
      id="nigerian-map"
      className="relative z-10 flex flex-col justify-center sm:py-32 py-10"
    >
      <h1 className="text-white text-center font-bold text-3xl md:text-4xl mb-16">
        Where would you like to invest?
      </h1>

      <MapContainer
        center={[9.082, 8.6753]}
        zoom={6}
        minZoom={6.5}
        maxZoom={12}
        maxBoundsViscosity={1.0}
        className="h-[50px] sm:h-[600px] w-full max-w-[100%] overflow-hidden"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {statesData.features.map((state, index) => {
          const coordinates = state.geometry.coordinates[0].map(
            (item: number[]) => [item[1], item[0]] as [number, number]
          );

          const stateName = state.properties.name;

          return (
            <Polygon
              key={index}
              pathOptions={{
                // fillColor: "#fd8d3c",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: "3",
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.15,
                    weight: 5,
                    dashArray: "10",
                    color: "#666",
                    // fillColor: "#facdcc",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.15,
                    weight: 2,
                    dashArray: "3",
                    color: "#666",
                    // fillColor: "#fff",
                  });
                },
                click: () => {
                  if (stateName === "Lagos" || stateName === "Abuja") {
                    setSelectedState(stateName as "Lagos" | "Abuja");
                  }
                },
              }}
            />
          );
        })}

        {(selectedState === "Abuja" ? abujaPins : lagosPins).map(
          (pin, index) => (
            <Marker key={index} position={pin.geocode} icon={customIcon}>
              <Popup>{pin.popUp}</Popup>
            </Marker>
          )
        )}

        <ZoomHandler state={selectedState} />
      </MapContainer>
    </div>
  );
}
