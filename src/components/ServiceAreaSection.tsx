import dynamic from "next/dynamic";

const SERVICE_AREAS = [
  "Holland",
  "Zeeland",
  "Grand Haven",
  "Hudsonville",
  "West Olive",
  "Spring Lake",
  "Allendale",
  "Jenison",
  "Coopersville",
  "Park Township",
  "Saugatuck",
  "Ferrysburg",
];

const BRAND_GREEN = "#2D4A2D";

// Leaflet relies on `window`, so the map renders only on the client.
const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[380px] w-full animate-pulse rounded-[2rem] bg-[var(--bg-dark)] ring-1 ring-white/[0.08] sm:h-[430px] lg:h-[480px]"
      aria-hidden="true"
    />
  ),
});

export default function ServiceAreaSection() {
  return (
    <div className="w-full">
      <ServiceAreaMap />

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
          Service Areas
        </h3>
        <p className="mt-2 text-base text-[var(--text-secondary)]">
          Proudly serving these West Michigan communities and surrounding areas:
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 text-base text-[var(--text-secondary)]"
            >
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: BRAND_GREEN }}
              />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
