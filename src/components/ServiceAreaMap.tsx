"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo } from "react";
import {
  AttributionControl,
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import { ottawaCountyMi } from "@/data/ottawa-county-mi";
import { SERVICE_AREA_CITIES } from "@/lib/service-area-map";

/** Matches `--green` / `--bg-green` in globals.css (primary Fraaza green). */
const BRAND_GREEN = "#2D4A2D";

export function ServiceAreaMap() {
  useEffect(() => {
    // Avoid broken default marker assets if any layer falls back to DivIcon defaults.
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
      ._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });
  }, []);

  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "fraaza-leaflet-marker",
        html: `<div style="width:11px;height:11px;background:${BRAND_GREEN};border:2px solid #ffffff;border-radius:9999px;box-shadow:0 1px 4px rgba(0,0,0,0.45)"></div>`,
        iconSize: [15, 15],
        iconAnchor: [7, 7],
        popupAnchor: [0, -6],
      }),
    []
  );

  return (
    <div
      className="w-full overflow-hidden rounded-2xl shadow-[var(--shadow-md)]"
      aria-label="Map of Fraaza service area in West Michigan"
    >
      <MapContainer
        center={[42.9, -86]}
        zoom={9.5}
        zoomSnap={0.5}
        className="z-0 h-[400px] w-full min-w-0 sm:h-[500px] lg:h-[600px]"
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
        />
        <AttributionControl prefix={false} />
        <GeoJSON
          data={ottawaCountyMi}
          style={{
            color: BRAND_GREEN,
            fillColor: BRAND_GREEN,
            fillOpacity: 0.28,
            weight: 2.5,
            opacity: 1,
            lineJoin: "round",
          }}
        />
        {SERVICE_AREA_CITIES.map((city) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lng]}
            icon={markerIcon}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
