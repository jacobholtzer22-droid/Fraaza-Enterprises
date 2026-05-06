'use client';

import { MapContainer, TileLayer, Polygon, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
  { name: 'Holland', pos: [42.7875, -86.1089] as [number, number], dir: 'left' as const },
  { name: 'Zeeland', pos: [42.8125, -86.0192] as [number, number], dir: 'right' as const },
  { name: 'Grand Haven', pos: [43.0631, -86.2284] as [number, number], dir: 'top' as const },
  { name: 'Hudsonville', pos: [42.8694, -85.8636] as [number, number], dir: 'right' as const },
];

export default function ServiceAreaMap() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[42.88, -86.05]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CartoDB"
        />
        <Polygon
          positions={serviceArea}
          pathOptions={{
            color: '#dc2626',
            fillColor: '#dc2626',
            fillOpacity: 0,
            weight: 3,
            dashArray: '8, 8',
          }}
        />
        {cities.map((city) => (
          <CircleMarker
            key={city.name}
            center={city.pos}
            radius={9}
            pathOptions={{
              color: '#ffffff',
              fillColor: '#dc2626',
              fillOpacity: 1,
              weight: 2,
            }}
          >
            <Tooltip
              permanent
              direction={city.dir}
              offset={
                city.dir === 'left' ? [-10, 0] : city.dir === 'right' ? [10, 0] : [0, -10]
              }
              className="city-tooltip"
            >
              {city.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
