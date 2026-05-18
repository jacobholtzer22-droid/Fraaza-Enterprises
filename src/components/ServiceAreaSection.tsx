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
  "Muskegon",
  "Wyoming",
  "Grandville",
  "Allegan",
  "Fennville",
  "Nunica",
  "Walker",
  "Kentwood",
  "Grand Rapids",
];

const BRAND_GREEN = "#2D4A2D";

/** Office / map pin — Google Maps resolves this to the correct coordinates in the embed. */
const MAP_PIN_ADDRESS = "10060 Polk St, Zeeland, MI 49464";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_PIN_ADDRESS)}&z=16&output=embed&hl=en`;

export default function ServiceAreaSection() {
  return (
    <div className="w-full">
      <div>
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

      <div className="mt-8 overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.1]">
        <iframe
          title="Map — 10060 Polk St, Zeeland, Michigan"
          src={MAP_EMBED_SRC}
          className="h-[380px] w-full border-0 sm:h-[430px] lg:h-[480px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
