"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  CircleMarker,
  MapContainer,
  Polygon,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import {
  SERVICE_AREA_CITIES,
  SERVICE_AREA_POLYGON,
} from "@/lib/service-area-map";

export function ServiceAreaMap() {
  const bounds = L.latLngBounds(SERVICE_AREA_POLYGON);

  return (
    <MapContainer
      bounds={bounds}
      className="service-area-map z-0 h-56 min-h-[14rem] w-full min-w-0 sm:h-64"
      scrollWheelZoom={false}
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon
        positions={SERVICE_AREA_POLYGON}
        pathOptions={{
          color: "#C8956C",
          fillColor: "#C8956C",
          fillOpacity: 0.18,
          weight: 2,
          opacity: 0.95,
        }}
      />
      {SERVICE_AREA_CITIES.map((city) => (
        <CircleMarker
          key={city.name}
          center={[city.lat, city.lng]}
          radius={6}
          pathOptions={{
            color: "#f5f5f5",
            fillColor: "#C8956C",
            fillOpacity: 1,
            weight: 1.5,
          }}
        >
          <Tooltip direction="top" offset={[0, -6]} opacity={1}>
            {city.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
