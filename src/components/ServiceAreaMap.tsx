'use client';

import { MapContainer, TileLayer, Polygon, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BRAND_GREEN = '#2d4a2d';

const serviceArea: [number, number][] = [
  [42.72, -86.215],
  [42.65, -86.215],
  [42.65, -85.85],
  [42.86, -85.72],
  [43.1, -85.87],
  [43.11, -86.22],
  [42.96, -86.25],
  [42.85, -86.22],
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
        center={[42.88, -86.0]}
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
            color: BRAND_GREEN,
            fillColor: BRAND_GREEN,
            fillOpacity: 0.35,
            weight: 3,
          }}
        />
        {cities.map((city) => (
          <CircleMarker
            key={city.name}
            center={city.pos}
            radius={8}
            pathOptions={{
              color: '#ffffff',
              fillColor: BRAND_GREEN,
              fillOpacity: 1,
              weight: 2,
            }}
          >
            <Popup>{city.name}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
