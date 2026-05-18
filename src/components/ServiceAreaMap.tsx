"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polygon,
  Tooltip,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  OFFICE,
  SERVICE_AREA_CITIES,
  SERVICE_AREA_POLYGON,
} from "@/lib/service-area-map";

const BRAND_GREEN = "#3A5C3A";
const BRAND_GREEN_BRIGHT = "#7CB07C";
const ACCENT = "#C8956C";

/** Auto-fit the map to the polygon + office on mount, so every service area is visible. */
function FitToServiceArea() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds([
      ...SERVICE_AREA_POLYGON.map(([lat, lng]) => L.latLng(lat, lng)),
      L.latLng(OFFICE.lat, OFFICE.lng),
    ]);
    map.fitBounds(bounds, { padding: [24, 24] });
  }, [map]);

  return null;
}

/** Custom office pin in the brand accent color (drop-pin SVG). */
const officeIcon = L.divIcon({
  className: "fraaza-office-pin",
  html: `
    <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="officeShadow" x="-30%" y="-10%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.55"/>
        </filter>
      </defs>
      <path filter="url(#officeShadow)" d="M17 1C8.7 1 2 7.6 2 15.9c0 11 15 26.1 15 26.1s15-15.1 15-26.1C32 7.6 25.3 1 17 1z"
            fill="${ACCENT}" stroke="#fff" stroke-width="2"/>
      <circle cx="17" cy="16" r="5.5" fill="#fff"/>
    </svg>
  `,
  iconSize: [34, 44],
  iconAnchor: [17, 42],
  tooltipAnchor: [0, -36],
});

export default function ServiceAreaMap() {
  const polygonLatLngs = useMemo(
    () => SERVICE_AREA_POLYGON.map(([lat, lng]) => [lat, lng] as [number, number]),
    [],
  );

  return (
    <div
      className="relative h-[380px] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.1] sm:h-[430px] lg:h-[480px]"
      // Leaflet sets its own background; the dark color prevents a white flash
      // before tiles load.
      style={{ backgroundColor: "#0f1419" }}
    >
      <MapContainer
        center={[OFFICE.lat, OFFICE.lng]}
        zoom={10}
        scrollWheelZoom={false}
        zoomControl
        attributionControl
        className="h-full w-full"
        style={{ background: "#0f1419" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
          maxZoom={19}
        />

        <Polygon
          positions={polygonLatLngs}
          pathOptions={{
            color: BRAND_GREEN_BRIGHT,
            weight: 2,
            opacity: 0.9,
            fillColor: BRAND_GREEN,
            fillOpacity: 0.28,
            dashArray: "6 6",
          }}
        />

        {SERVICE_AREA_CITIES.map((city) => (
          <CircleMarker
            key={city.name}
            center={[city.lat, city.lng]}
            radius={7}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor: BRAND_GREEN_BRIGHT,
              fillOpacity: 1,
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -8]}
              opacity={1}
              permanent
              className="fraaza-city-tooltip"
            >
              {city.name}
            </Tooltip>
          </CircleMarker>
        ))}

        <Marker position={[OFFICE.lat, OFFICE.lng]} icon={officeIcon}>
          <Tooltip
            direction="top"
            offset={[0, -38]}
            opacity={1}
            className="fraaza-office-tooltip"
          >
            <strong>Fraaza Enterprises</strong>
            <br />
            {OFFICE.address}
          </Tooltip>
        </Marker>

        <FitToServiceArea />
      </MapContainer>

      {/* Legend overlay */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-[400] flex flex-col gap-1.5 rounded-xl bg-black/65 px-3 py-2 text-[11px] text-white shadow-lg backdrop-blur-sm sm:text-xs">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full ring-2 ring-white/90"
            style={{ backgroundColor: BRAND_GREEN_BRIGHT }}
          />
          <span>Service area city</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full ring-2 ring-white/90"
            style={{ backgroundColor: ACCENT }}
          />
          <span>Our office</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-4 rounded-[3px]"
            style={{
              backgroundColor: BRAND_GREEN,
              outline: `1px dashed ${BRAND_GREEN_BRIGHT}`,
            }}
          />
          <span>Service footprint</span>
        </div>
      </div>
    </div>
  );
}
