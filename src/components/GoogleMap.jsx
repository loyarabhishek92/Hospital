import React from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

// Fix default marker icon problem in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function GoogleMap() {
      // New York coordinates
  const position = [27.7172, 85.3240];
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg">
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}
        className="h-[500px] w-full"
      >
        {/* Zoom buttons */}
        <ZoomControl position="topright" />

        {/* OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker */}
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold">
                Our Location
              </h3>

              <p className="text-sm text-gray-600">
                Kathmandu, Nepal
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
