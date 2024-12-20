"use client";

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

export default function NigerianMap() {
    return (
        <MapContainer center={[9.072264, 7.491302]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    );
}