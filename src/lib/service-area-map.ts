/**
 * Approximate West Michigan service footprint (lakeshore corridor).
 * Polygon is illustrative for customer-facing maps, not a legal boundary.
 */
export const SERVICE_AREA_POLYGON: [number, number][] = [
  [43.15, -86.38],
  [43.12, -85.68],
  [42.98, -85.58],
  [42.72, -85.7],
  [42.63, -86.05],
  [42.68, -86.38],
  [42.92, -86.45],
  [43.15, -86.38],
];

/** Primary cities called out on the contact map (tap / hover markers for names). */
export const SERVICE_AREA_CITIES = [
  { name: "Grand Haven", lat: 43.0634, lng: -86.2286 },
  { name: "Spring Lake", lat: 43.0769, lng: -86.1865 },
  { name: "Holland", lat: 42.7875, lng: -86.1089 },
  { name: "Zeeland", lat: 42.8125, lng: -85.8559 },
  { name: "Hudsonville", lat: 42.8709, lng: -85.8656 },
] as const;
