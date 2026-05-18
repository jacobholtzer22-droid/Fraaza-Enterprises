/**
 * Service-area map data used on the contact page.
 *
 * - `OFFICE` is the Fraaza Enterprises office pin (10060 Polk St, Zeeland, MI).
 * - `SERVICE_AREA_CITIES` are the West Michigan cities/townships served — each
 *   shown as a labelled marker.
 * - `SERVICE_AREA_POLYGON` traces a hand-tuned footprint around all served
 *   communities (hugging the Lake Michigan coast on the west) so the map can
 *   visually highlight the full coverage region when zoomed out.
 */

export type LatLng = readonly [number, number];

export const OFFICE = {
  name: "Fraaza Enterprises Office",
  address: "10060 Polk St, Zeeland, MI 49464",
  lat: 42.8067,
  lng: -86.0411,
} as const;

export const SERVICE_AREA_CITIES = [
  { name: "Holland", lat: 42.7875, lng: -86.1089 },
  { name: "Zeeland", lat: 42.8125, lng: -86.0192 },
  { name: "Park Township", lat: 42.7867, lng: -86.1822 },
  { name: "Saugatuck", lat: 42.6542, lng: -86.2058 },
  { name: "West Olive", lat: 42.9522, lng: -86.1709 },
  { name: "Grand Haven", lat: 43.0631, lng: -86.2284 },
  { name: "Ferrysburg", lat: 43.0822, lng: -86.2200 },
  { name: "Spring Lake", lat: 43.0786, lng: -86.1992 },
  { name: "Coopersville", lat: 43.0653, lng: -85.9352 },
  { name: "Allendale", lat: 42.9742, lng: -85.9461 },
  { name: "Hudsonville", lat: 42.8694, lng: -85.8636 },
  { name: "Jenison", lat: 42.9069, lng: -85.9436 },
] as const;

/**
 * Approximate service-footprint outline (clockwise from NW corner). Tuned so
 * the polygon hugs the Lake Michigan shoreline on the west and contains every
 * served community with a comfortable buffer.
 */
export const SERVICE_AREA_POLYGON: readonly LatLng[] = [
  [43.115, -86.275], // NW — Ferrysburg coast
  [43.115, -85.870], // NE — above Coopersville
  [42.880, -85.760], // E — east of Jenison / Hudsonville
  [42.760, -85.815], // SE — south of Hudsonville
  [42.610, -86.020], // S — south-east of Saugatuck
  [42.605, -86.225], // SW — Saugatuck coast
  [42.780, -86.225], // W — Holland coast
];
