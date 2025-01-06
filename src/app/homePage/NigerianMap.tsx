"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngTuple } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";

export default function NigerianMapComponent() {
  const markers: { geocode: LatLngTuple; popUp: string }[] = [
    {
      geocode: [6.5244, 3.3792],
      popUp: "This is Lagos",
    },
    {
      geocode: [9.0563, 7.4985],
      popUp: "This is Abuja",
    },
    {
      geocode: [7.3775, 3.947],
      popUp: "This is Ibadan",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
    iconUrl: "/images/oneLogo.svg",
    iconSize: [30, 30],
  });

  return (
    <div className="relative z-10  flex justify-center sm:py-32 py-10">
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={6}
        minZoom={1}
        maxZoom={16}
        // maxBounds={nigeriaBounds}
        maxBoundsViscosity={1.0}
        className="xl:h-screen h-fit sm:w-5/6 w-11/12 self-center"
      >
        <TileLayer
          // className="flex items-center justify-center"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
