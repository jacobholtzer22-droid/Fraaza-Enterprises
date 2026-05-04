import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fraaza Enterprises",
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Holland",
    addressRegion: "MI",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.7876,
    longitude: -86.1089,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
      description: "By appointment only",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Holland", addressRegion: "MI" },
    { "@type": "City", name: "Zeeland", addressRegion: "MI" },
    { "@type": "City", name: "Grand Haven", addressRegion: "MI" },
    { "@type": "City", name: "Hudsonville", addressRegion: "MI" },
    { "@type": "State", name: "West Michigan" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-dvh flex flex-col overflow-x-hidden">
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
