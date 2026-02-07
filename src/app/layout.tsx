import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Riverside Riders Fall Wheels Show 2026 | Free Car & Bike Show in St. Charles IL",
  description:
    "Join the 5th Annual Riverside Riders Fall Wheels Show on Saturday, September 19, 2026 at Riverside Community Church in St. Charles, IL. Free entry, free food, top quality trophies, independently judged classic cars, modified cars, modern cars, trucks & motorcycles. Family fun activities, live music, spacewalks & games. Serving the Fox Valley area — St. Charles, Geneva, Batavia, South Elgin, Campton Hills, Elgin, West Chicago, Wheaton, North Aurora & the western suburbs of Chicago.",
  keywords: [
    // Primary event
    "car show",
    "car show 2026",
    "car show near me",
    "car show September 2026",
    "fall car show",
    "fall wheels show",
    "Riverside Riders",
    "Riverside Riders car show",
    "Riverside Riders Fall Wheels Show",
    // Vehicle types
    "classic car show",
    "classic car show Illinois",
    "antique car show",
    "vintage car show",
    "hot rod show",
    "muscle car show",
    "modified car show",
    "custom car show",
    "truck show",
    "classic truck show",
    "motorcycle show",
    "bike show",
    "Harley Davidson show",
    "all wheels show",
    // Local area — primary
    "car show St Charles IL",
    "car show St. Charles Illinois",
    "car show Saint Charles",
    "car show Geneva IL",
    "car show Batavia IL",
    "car show South Elgin IL",
    "car show Campton Hills IL",
    // Local area — extended
    "car show Elgin IL",
    "car show West Chicago IL",
    "car show Wheaton IL",
    "car show North Aurora IL",
    "car show Wayne IL",
    "car show Naperville IL",
    "car show Aurora IL",
    "car show DuPage County",
    "car show Kane County",
    "car show Fox Valley",
    "car show western suburbs Chicago",
    "car show Tri-Cities Illinois",
    // Event features
    "free car show",
    "free car show Illinois",
    "free car show near me",
    "car show free entry",
    "car show free food",
    "car show trophies",
    "judged car show",
    "family car show",
    "car show with food",
    "car show live music",
    "car show family activities",
    // Registration
    "register car show",
    "car show registration",
    "enter car show",
    "sign up car show",
    // General
    "things to do St Charles IL",
    "things to do Fox Valley",
    "weekend events St Charles",
    "September events Illinois",
    "family events St Charles IL",
    "Riverside Community Church car show",
    "RCC car show",
  ],
  openGraph: {
    title: "Riverside Riders Fall Wheels Show 2026 — Free Car & Bike Show",
    description:
      "5th Annual Fall Wheels Show — Saturday, September 19, 2026 in St. Charles, IL. Free entry, free food & drinks, top quality trophies, live music, family fun. Classic cars, modified rides, modern vehicles, trucks & motorcycles. Register today!",
    type: "website",
    url: "https://riversideriderscarshow.com",
    siteName: "Riverside Riders Fall Wheels Show",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverside Riders Fall Wheels Show 2026",
    description:
      "Free car & bike show in St. Charles, IL — September 19, 2026. Classic cars, motorcycles, trucks, free food, trophies & family fun!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://riversideriderscarshow.com",
  },
  other: {
    "geo.region": "US-IL",
    "geo.placename": "St. Charles, Illinois",
    "geo.position": "41.9;-88.3",
    ICBM: "41.9, -88.3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        {/* JSON-LD Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Riverside Riders Fall Wheels Show 2026",
              description:
                "5th Annual Riverside Riders Fall Wheels Show — a completely independent judged car, truck, and motorcycle show with free entry, free food, top quality trophies, live music, and family fun activities.",
              startDate: "2026-09-19T11:00:00-05:00",
              endDate: "2026-09-19T15:00:00-05:00",
              doorTime: "2026-09-19T10:00:00-05:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Riverside Community Church",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "37W130 Crane Road",
                  addressLocality: "St. Charles",
                  addressRegion: "IL",
                  postalCode: "60175",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 41.9,
                  longitude: -88.3,
                },
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/LimitedAvailability",
                url: "https://riversideriderscarshow.com#register",
                validFrom: "2026-01-01",
              },
              organizer: {
                "@type": "Organization",
                name: "Riverside Riders",
                email: "allwheelsshow@rccstc.org",
                url: "https://riversideriderscarshow.com",
              },
              performer: {
                "@type": "MusicGroup",
                name: "3-D Sound",
              },
              image: "https://riversideriderscarshow.com/images/logo.png",
              isAccessibleForFree: true,
              typicalAgeRange: "All ages",
              audience: {
                "@type": "Audience",
                audienceType:
                  "Car enthusiasts, motorcycle enthusiasts, truck enthusiasts, classic car collectors, families",
              },
              keywords:
                "car show, classic cars, motorcycle show, St. Charles IL, free car show, Fox Valley, Geneva, Batavia, South Elgin, Campton Hills",
            }),
          }}
        />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Riverside Riders",
              url: "https://riversideriderscarshow.com",
              logo: "https://riversideriderscarshow.com/images/logo.png",
              email: "allwheelsshow@rccstc.org",
              description:
                "Riverside Riders host the annual Fall Wheels Show in St. Charles, IL — a free, independently judged car, truck, and motorcycle show serving the Fox Valley area.",
              areaServed: [
                { "@type": "City", name: "St. Charles, Illinois" },
                { "@type": "City", name: "Geneva, Illinois" },
                { "@type": "City", name: "Batavia, Illinois" },
                { "@type": "City", name: "South Elgin, Illinois" },
                { "@type": "City", name: "Campton Hills, Illinois" },
                { "@type": "City", name: "Elgin, Illinois" },
                { "@type": "City", name: "West Chicago, Illinois" },
                { "@type": "City", name: "Wheaton, Illinois" },
                { "@type": "City", name: "North Aurora, Illinois" },
                { "@type": "City", name: "Aurora, Illinois" },
                { "@type": "City", name: "Naperville, Illinois" },
                { "@type": "City", name: "Wayne, Illinois" },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#F5F0E6",
              border: "2px solid #8B1A1A",
              fontWeight: "bold",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
