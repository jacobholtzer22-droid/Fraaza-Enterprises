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

export default function ServiceAreaSection() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          title="Fraaza Enterprises - 10060 Polk St, Zeeland, MI"
          src="https://maps.google.com/maps?q=10060+Polk+St+Zeeland+MI+49464&output=embed&z=12"
          className="h-[400px] w-full border-0 sm:h-[450px] lg:h-[500px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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
