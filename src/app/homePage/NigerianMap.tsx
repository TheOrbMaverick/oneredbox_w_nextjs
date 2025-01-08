"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  // Polygon,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngBounds, LatLngTuple } from "leaflet";
import { useState } from "react";
// import MarkerClusterGroup from "react-leaflet-cluster";

export default function NigerianMapComponent() {
  const [selectedState, setSelectedState] = useState<"Lagos" | "Abuja" | null>(
    null
  );

  const nigeriaBounds: LatLngBounds = new LatLngBounds(
    [4.27, 2.69],
    [13.89, 14.68]
  );

  const lagosBounds: LatLngBounds = new LatLngBounds(
    [6.3969, 2.69],
    [6.8, 4.0]
  );

  const abujaBounds: LatLngBounds = new LatLngBounds([8.4, 6.7], [9.45, 7.8]);

  const lagosPins: { geocode: LatLngTuple; popUp: string }[] = [
    { geocode: [6.5244, 3.3792], popUp: "Lagos Pin 1 (Lagos Island)" },
    { geocode: [6.45, 3.4], popUp: "Lagos Pin 2 (Mainland)" },
    { geocode: [6.5, 3.45], popUp: "Lagos Pin 3 (Ikeja)" },
    { geocode: [6.6, 3.5], popUp: "Lagos Pin 4 (Agege)" },
    { geocode: [6.4, 3.0], popUp: "Lagos Pin 5 (Agbara)" },
    { geocode: [6.8, 3.6], popUp: "Lagos Pin 6 (Epe)" },
    { geocode: [6.7, 3.5], popUp: "Lagos Pin 7 (Lekki)" },
  ];

  const abujaPins: { geocode: LatLngTuple; popUp: string }[] = [
    { geocode: [9.0563, 7.4985], popUp: "Abuja Pin 1" },
    { geocode: [9.1, 7.5], popUp: "Abuja Pin 2" },
  ];

  const HighlightedState = ({ bounds }: { bounds: LatLngBounds }) => {
    const map = useMap();
    map.flyToBounds(bounds);
    return null;
  };

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
    iconUrl: "/images/oneLogo.svg",
    iconSize: [30, 30],
  });

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
        bounds={nigeriaBounds}
        maxBounds={nigeriaBounds}
        maxBoundsViscosity={1.0}
        className="h-[50px] sm:h-[600px] w-full max-w-[100%] overflow-hidden"
      >
        <TileLayer
          // className="flex items-center justify-center"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Rectangle
          bounds={nigeriaBounds}
          pathOptions={{
            color: "#FF0000",
            weight: 2,
            fillOpacity: 0.1,
            fillColor: "#FF0000",
          }}
        />

        <Rectangle
          bounds={lagosBounds}
          pathOptions={{
            color: "#FF0000))",
            weight: 2,
            fillOpacity: 0.1,
            fillColor: "#0000FF",
          }}
          eventHandlers={{
            click: () => {
              setSelectedState("Lagos");
            },
          }}
        />
        {selectedState === "Lagos" && <HighlightedState bounds={lagosBounds} />}

        <Rectangle
          bounds={abujaBounds}
          pathOptions={{
            color: "#FF0000",
            weight: 2,
            fillOpacity: 0.1,
            fillColor: "#0000FF",
          }}
          eventHandlers={{
            click: () => {
              setSelectedState("Abuja");
            },
          }}
        />
        {selectedState === "Abuja" && <HighlightedState bounds={abujaBounds} />}

        {(selectedState === "Lagos" ? lagosPins : abujaPins).map(
          (pin, index) => (
            <Marker key={index} position={pin.geocode} icon={customIcon}>
              <Popup>{pin.popUp}</Popup>
            </Marker>
          )
        )}
      </MapContainer>
    </div>
  );
}
