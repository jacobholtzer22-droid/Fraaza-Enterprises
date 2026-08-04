import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Hydroseeding Experts | Holland, MI | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  logo: `${SITE.url}/images/fraaza-logo.webp`,
  image: `${SITE.url}/images/fraaza-logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "10060 Polk St",
    addressLocality: "Zeeland",
    addressRegion: "MI",
    postalCode: "49464",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Holland", addressRegion: "MI" },
    { "@type": "City", name: "Zeeland", addressRegion: "MI" },
    { "@type": "City", name: "Grand Haven", addressRegion: "MI" },
    { "@type": "City", name: "Hudsonville", addressRegion: "MI" },
    "West Michigan",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hydroseeding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Snow Plowing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soil Preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Erosion Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sod Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retaining Walls" } },
    ],
  },
  founder: { "@type": "Person", name: SITE.owner },
  foundingDate: `${SITE.since}`,
  priceRange: "$$",
  sameAs: [
    "https://www.bbb.org/us/mi/zeeland/profile/landscape-contractors/fraaza-enterprises-inc-0372-38114728",
    "http://www.hydroseeding.org/",
    "https://www.yelp.com/biz/fraaza-enterprises-zeeland-2",
    "https://reviews.birdeye.com/fraaza-enterprises-inc-165739723117877",
  ],
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} text-base antialiased bg-background text-foreground`}
      >
        <JsonLd data={localBusiness} />
        <JsonLd data={webSite} />
        <div className="min-h-dvh flex flex-col overflow-x-hidden">
          <Header />
          <main className="relative flex-1 pt-[var(--header-height)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
