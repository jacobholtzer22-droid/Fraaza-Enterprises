'use client';

import { MapContainer, TileLayer, Polygon, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/** Site brand is dark olive (#2D4A2D); map-only vibrant green for contrast on light tiles */
const MAP_AREA_GREEN = '#16a34a';

const serviceArea: [number, number][] = [
  [42.7, -86.225],
  [42.64, -86.18],
  [42.64, -85.82],
  [42.82, -85.7],
  [43.02, -85.73],
  [43.13, -85.87],
  [43.15, -86.18],
  [43.08, -86.26],
  [42.9, -86.25],
  [42.78, -86.23],
];

const cities = [
  { name: 'Holland', pos: [42.7875, -86.1089] as [number, number] },
  { name: 'Zeeland', pos: [42.8125, -86.0192] as [number, number] },
  { name: 'Grand Haven', pos: [43.0631, -86.2284] as [number, number] },
  { name: 'Hudsonville', pos: [42.8694, -85.8636] as [number, number] },
];

export default function ServiceAreaMap() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[42.89, -85.97]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CartoDB"
        />
        <Polygon
          positions={serviceArea}
          pathOptions={{
            color: MAP_AREA_GREEN,
            fillColor: MAP_AREA_GREEN,
            fillOpacity: 0.45,
            weight: 4,
          }}
        />
        {cities.map((city) => (
          <CircleMarker
            key={city.name}
            center={city.pos}
            radius={9}
            pathOptions={{
              color: '#ffffff',
              fillColor: MAP_AREA_GREEN,
              fillOpacity: 1,
              weight: 2,
            }}
          >
            <Tooltip permanent direction="top" offset={[0, -10]} className="city-tooltip">
              {city.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
