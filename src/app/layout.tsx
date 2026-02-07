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
  metadataBase: new URL("https://riversideriderscarshow.com"),
  title: {
    default:
      "Riverside Riders Fall Wheels Show 2026 | Free Car Show St. Charles IL — September 19",
    template: "%s | Riverside Riders Fall Wheels Show",
  },
  description:
    "Join the 5th Annual Riverside Riders Fall Wheels Show — Saturday, September 19, 2026 in St. Charles, Illinois. FREE entry, FREE food (hot dogs, snacks, ice cream), top quality trophies, independently judged classic cars, modified cars, modern cars, trucks & motorcycles. Live music by 3-D Sound, spacewalks & family activities. The Fox Valley's premier car show serving St. Charles, Geneva, Batavia, South Elgin, Campton Hills, Elgin, West Chicago, Wheaton, Naperville, Aurora & western suburbs of Chicago. Register your ride online today — no entry fee, limited space!",
  keywords: [
    // ──── Primary event terms ────
    "car show",
    "car show 2026",
    "car show near me",
    "car show near me 2026",
    "car show September 2026",
    "car show September",
    "September car show",
    "September car show 2026",
    "September car show Illinois",
    "fall car show",
    "fall car show 2026",
    "fall car show Illinois",
    "fall wheels show",
    "Riverside Riders",
    "Riverside Riders car show",
    "Riverside Riders Fall Wheels Show",
    "Riverside Riders Fall Wheels Show 2026",
    // ──── Vehicle types ────
    "classic car show",
    "classic car show Illinois",
    "classic car show 2026",
    "antique car show",
    "antique car show Illinois",
    "vintage car show",
    "vintage car show Illinois",
    "vintage car show 2026",
    "hot rod show",
    "hot rod show Illinois",
    "muscle car show",
    "muscle car show Illinois",
    "modified car show",
    "custom car show",
    "modern car show",
    "sports car show",
    "truck show",
    "truck show Illinois",
    "classic truck show",
    "classic truck show Illinois",
    "motorcycle show",
    "motorcycle show Illinois",
    "motorcycle show 2026",
    "bike show",
    "bike show Illinois",
    "Harley Davidson show",
    "Harley Davidson show Illinois",
    "Indian motorcycle show",
    "import bike show",
    "all wheels show",
    "auto show",
    "auto show Illinois",
    "automobile show",
    "vehicle show",
    "car and bike show",
    "car truck and bike show",
    // ──── St. Charles primary ────
    "car show St Charles",
    "car show St Charles IL",
    "car show St. Charles Illinois",
    "car show Saint Charles",
    "car show Saint Charles IL",
    "car show Saint Charles Illinois",
    "St Charles car show",
    "St Charles car show 2026",
    "St Charles Illinois car show",
    "things to do St Charles IL",
    "things to do in St Charles",
    "things to do St Charles September",
    "St Charles events",
    "St Charles events September 2026",
    "St Charles weekend events",
    "St Charles fall events",
    "St Charles fall festival",
    // ──── Fox Valley / Tri-Cities ────
    "car show Fox Valley",
    "Fox Valley car show",
    "Fox Valley car show 2026",
    "Fox Valley events",
    "Fox Valley events September",
    "car show Tri-Cities Illinois",
    "Tri-Cities car show",
    // ──── Geneva ────
    "car show Geneva IL",
    "car show Geneva Illinois",
    "Geneva car show",
    "Geneva car show 2026",
    "Geneva events September",
    "things to do Geneva IL",
    // ──── Batavia ────
    "car show Batavia IL",
    "car show Batavia Illinois",
    "Batavia car show",
    "Batavia car show 2026",
    "Batavia events September",
    "things to do Batavia IL",
    // ──── South Elgin ────
    "car show South Elgin IL",
    "car show South Elgin Illinois",
    "South Elgin car show",
    "South Elgin events",
    "things to do South Elgin IL",
    // ──── Campton Hills ────
    "car show Campton Hills IL",
    "car show Campton Hills Illinois",
    "Campton Hills car show",
    "Campton Hills events",
    // ──── Elgin ────
    "car show Elgin IL",
    "car show Elgin Illinois",
    "Elgin car show",
    "Elgin car show 2026",
    "Elgin events September",
    // ──── West Chicago ────
    "car show West Chicago IL",
    "West Chicago car show",
    // ──── Wheaton ────
    "car show Wheaton IL",
    "Wheaton car show",
    "Wheaton car show 2026",
    // ──── Aurora / North Aurora ────
    "car show North Aurora IL",
    "car show Aurora IL",
    "Aurora car show",
    "Aurora car show 2026",
    // ──── Naperville ────
    "car show Naperville IL",
    "Naperville car show",
    "Naperville car show 2026",
    // ──── Wayne ────
    "car show Wayne IL",
    "Wayne car show",
    // ──── County-level ────
    "car show DuPage County",
    "car show Kane County",
    "DuPage County car show",
    "Kane County car show",
    "car show western suburbs Chicago",
    "western suburbs car show",
    "car show suburbs of Chicago",
    "Chicago suburbs car show",
    "car show near Chicago",
    "Illinois car show",
    "Illinois car show 2026",
    "Illinois car shows September",
    // ──── Event features — free ────
    "free car show",
    "free car show Illinois",
    "free car show near me",
    "free car show 2026",
    "free car show September",
    "free car show St Charles",
    "free car show Fox Valley",
    "car show free entry",
    "car show no entry fee",
    "car show free food",
    "car show free admission",
    // ──── Event features — trophies & judging ────
    "car show trophies",
    "car show awards",
    "car show trophy classes",
    "judged car show",
    "independently judged car show",
    "car show competition",
    "car show best in show",
    "classic car trophy",
    // ──── Event features — family ────
    "family car show",
    "family friendly car show",
    "family events St Charles",
    "family events Fox Valley",
    "kid friendly car show",
    "car show with food",
    "car show live music",
    "car show family activities",
    "car show spacewalks",
    "car show games",
    // ──── Registration intent ────
    "register car show",
    "car show registration",
    "car show registration 2026",
    "enter car show",
    "sign up car show",
    "register vehicle car show",
    "car show entry form",
    "car show sign up online",
    // ──── Seasonal / temporal ────
    "September events Illinois",
    "September events 2026",
    "September events near me",
    "fall events Illinois",
    "fall events St Charles",
    "fall events Fox Valley",
    "fall events near me 2026",
    "weekend events St Charles",
    "weekend events September 2026",
    "outdoor events St Charles",
    "outdoor events September Illinois",
    // ──── Venue ────
    "Riverside Community Church car show",
    "Riverside Community Church St Charles",
    "Riverside Community Church events",
    "RCC car show",
    "37W130 Crane Road St Charles",
    // ──── Brand variations ────
    "riversideriderscarshow",
    "riverside riders car show",
    "RCC Fall Wheels Show",
    "Fall Wheels Show 2026",
    "all wheels show St Charles",
  ],
  openGraph: {
    title:
      "Riverside Riders Fall Wheels Show 2026 — Free Car & Bike Show in St. Charles, IL",
    description:
      "5th Annual Fall Wheels Show — Saturday, September 19, 2026 in St. Charles, IL. FREE entry, FREE food & drinks, top quality trophies, live music by 3-D Sound, spacewalks & family fun. Classic cars, modified rides, modern vehicles, trucks & motorcycles — all independently judged. The Fox Valley's biggest car show. Register your ride today!",
    type: "website",
    url: "https://riversideriderscarshow.com",
    siteName: "Riverside Riders Fall Wheels Show",
    locale: "en_US",
    images: [
      {
        url: "/images/show-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Classic cars on display at the Riverside Riders Fall Wheels Show in St. Charles, Illinois",
        type: "image/jpeg",
      },
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Riverside Riders Fall Wheels Show logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Riverside Riders Fall Wheels Show 2026 — Free Car Show in St. Charles IL",
    description:
      "FREE car, truck & bike show — Sept 19, 2026 in St. Charles, IL. Free food, trophies, live music, family fun. Classic cars, motorcycles, trucks. Register free today!",
    images: ["/images/show-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://riversideriderscarshow.com",
  },
  category: "Events",
  classification: "Car Show",
  other: {
    "geo.region": "US-IL",
    "geo.placename": "St. Charles, Illinois",
    "geo.position": "41.9;-88.3",
    ICBM: "41.9, -88.3",
    "revisit-after": "3 days",
    rating: "General",
    distribution: "Global",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── JSON-LD: Event Schema ──
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://riversideriderscarshow.com/#event",
    name: "Riverside Riders Fall Wheels Show 2026",
    alternateName: [
      "Fall Wheels Show 2026",
      "RCC Fall Wheels Show",
      "Riverside Riders Car Show",
      "St Charles Car Show 2026",
    ],
    description:
      "The 5th Annual Riverside Riders Fall Wheels Show is the Fox Valley's premier free car, truck, and motorcycle show. Held at Riverside Community Church in St. Charles, Illinois on Saturday, September 19, 2026. Features 7 independently judged trophy classes: Best Classic Stock Car (1900-1970), Best Classic Stock Car (1971-1999), Best Modified Classic Car (1900-1970), Best Modified Stock Car (1971-1999), Best Modern Car or Truck (2000+), Best Classic Truck (Pre-2000), and Best Motorcycles (All Years and Makes). Free entry, free food, live music by 3-D Sound, spacewalks, games, and family fun activities. Serving enthusiasts from St. Charles, Geneva, Batavia, South Elgin, Campton Hills, Elgin, Wheaton, Naperville, Aurora, and the greater Chicago western suburbs.",
    startDate: "2026-09-19T11:00:00-05:00",
    endDate: "2026-09-19T15:00:00-05:00",
    doorTime: "2026-09-19T10:00:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      "@id": "https://riversideriderscarshow.com/#venue",
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
        latitude: 41.914,
        longitude: -88.309,
      },
      hasMap: "https://www.google.com/maps?q=37W130+Crane+Rd,+St+Charles,+IL+60175",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Vehicle Registration — Free Entry",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        url: "https://riversideriderscarshow.com#register",
        validFrom: "2026-01-01",
        validThrough: "2026-09-19",
        description: "Free registration to enter your car, truck, or motorcycle in the judged show.",
      },
      {
        "@type": "Offer",
        name: "Spectator Admission — Free",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://riversideriderscarshow.com",
        description: "Free admission for all spectators. No tickets required.",
      },
    ],
    organizer: {
      "@type": "Organization",
      "@id": "https://riversideriderscarshow.com/#org",
      name: "Riverside Riders",
      email: "allwheelsshow@rccstc.org",
      url: "https://riversideriderscarshow.com",
      logo: "https://riversideriderscarshow.com/images/logo.png",
    },
    performer: {
      "@type": "MusicGroup",
      name: "3-D Sound",
      description: "Live sound and music throughout the event",
    },
    image: [
      "https://riversideriderscarshow.com/images/show-1.jpeg",
      "https://riversideriderscarshow.com/images/show-2.jpeg",
      "https://riversideriderscarshow.com/images/show-3.jpeg",
      "https://riversideriderscarshow.com/images/show-4.jpeg",
      "https://riversideriderscarshow.com/images/show-5.jpeg",
      "https://riversideriderscarshow.com/images/logo.png",
    ],
    isAccessibleForFree: true,
    typicalAgeRange: "All ages",
    maximumAttendeeCapacity: 500,
    audience: {
      "@type": "Audience",
      audienceType:
        "Car enthusiasts, motorcycle enthusiasts, truck enthusiasts, classic car collectors, hot rod builders, vintage automobile owners, families, automotive hobbyists",
    },
    about: [
      { "@type": "Thing", name: "Classic Cars" },
      { "@type": "Thing", name: "Motorcycles" },
      { "@type": "Thing", name: "Classic Trucks" },
      { "@type": "Thing", name: "Automotive Shows" },
      { "@type": "Thing", name: "Trophy Competition" },
    ],
    keywords:
      "car show, classic car show, motorcycle show, truck show, free car show, car show St Charles IL, car show September 2026, Fox Valley car show, Geneva car show, Batavia car show, South Elgin car show, Campton Hills car show, fall car show Illinois, car show near me, judged car show, car show trophies, family car show, car show free food, hot rod show, muscle car show, vintage car show",
    inLanguage: "en",
    superEvent: {
      "@type": "EventSeries",
      name: "Riverside Riders Fall Wheels Show",
      description: "Annual car, truck, and motorcycle show held in St. Charles, Illinois since 2022",
    },
  };

  // ── JSON-LD: Organization Schema ──
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://riversideriderscarshow.com/#org",
    name: "Riverside Riders",
    alternateName: ["Riverside Riders Car Show", "RCC Fall Wheels Show"],
    url: "https://riversideriderscarshow.com",
    logo: "https://riversideriderscarshow.com/images/logo.png",
    email: "allwheelsshow@rccstc.org",
    foundingDate: "2022",
    description:
      "Riverside Riders host the annual Fall Wheels Show in St. Charles, IL — the Fox Valley's premier free, independently judged car, truck, and motorcycle show. Serving the western suburbs of Chicago including St. Charles, Geneva, Batavia, South Elgin, Campton Hills, Elgin, Wheaton, Naperville, Aurora, and surrounding communities in DuPage and Kane Counties.",
    areaServed: [
      { "@type": "City", name: "St. Charles", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Geneva", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Batavia", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "South Elgin", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Campton Hills", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Elgin", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "West Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Wheaton", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "North Aurora", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Aurora", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Wayne", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "AdministrativeArea", name: "Kane County, Illinois" },
      { "@type": "AdministrativeArea", name: "DuPage County, Illinois" },
      { "@type": "AdministrativeArea", name: "Fox Valley, Illinois" },
    ],
  };

  // ── JSON-LD: FAQPage Schema (Google FAQ Rich Results) ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there an entry fee for the Riverside Riders Fall Wheels Show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! There is absolutely no entry fee for participants or spectators. The Riverside Riders Fall Wheels Show in St. Charles, IL is 100% free to enter and attend.",
        },
      },
      {
        "@type": "Question",
        name: "When is the Riverside Riders Fall Wheels Show 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 5th Annual Riverside Riders Fall Wheels Show takes place on Saturday, September 19, 2026. Vehicle registration begins at 10 AM and the show runs from 11 AM to 3 PM at Riverside Community Church in St. Charles, Illinois.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the Fall Wheels Show held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The show is held at Riverside Community Church, 37W130 Crane Road, St. Charles, IL 60175. It's conveniently located in the Fox Valley area, easily accessible from Geneva, Batavia, South Elgin, Campton Hills, Elgin, Wheaton, Naperville, Aurora, and the western suburbs of Chicago.",
        },
      },
      {
        "@type": "Question",
        name: "What types of vehicles can I enter in the car show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We welcome all types of vehicles — classic stock cars (1900-1970 and 1971-1999), modified classic cars (1900-1970 and 1971-1999), modern cars and trucks (2000 or above), classic trucks (pre-2000), and motorcycles of all years and makes including Harley-Davidson, Indian, Honda, Kawasaki, Ducati, BMW, and more. If it has wheels, bring it!",
        },
      },
      {
        "@type": "Question",
        name: "What are the trophy classes at the car show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seven independently judged entry classes: Best Classic Stock Car (1900-1970), Best Classic Stock Car (1971-1999), Best Modified Classic Car (1900-1970), Best Modified Stock Car (1971-1999), Best Modern Car or Truck (2000 or above), Best Classic Truck (Pre-2000), and Best Motorcycles (All Years and Makes). Plus three special judge awards: Best of Show, Gimme Your Keys (the car the judges all want), and Least Likely to Make it Home.",
        },
      },
      {
        "@type": "Question",
        name: "How is judging done at the Riverside Riders car show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All vehicles are independently judged by impartial judges. This is a completely independent judged award show, ensuring fair and unbiased results across all trophy classes.",
        },
      },
      {
        "@type": "Question",
        name: "Is there food at the Fall Wheels Show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Enjoy free hot dogs, snacks, chips, drinks, and ice cream all day long. All food and beverages are provided at no charge to participants and spectators.",
        },
      },
      {
        "@type": "Question",
        name: "Is the car show family friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! The Fall Wheels Show features family fun activities including spacewalks, games, and more. Live sound and music is provided by 3-D Sound throughout the entire event. It's a great outing for the whole family.",
        },
      },
      {
        "@type": "Question",
        name: "How do I register my vehicle for the car show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can register your vehicle online at riversideriderscarshow.com. The registration form takes less than 2 minutes to fill out. You can register multiple vehicles. There is no entry fee — registration is completely free.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register multiple vehicles for the car show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Use the 'Add Another Vehicle' button on the registration form to enter as many rides as you'd like. Each vehicle can be entered into its own trophy class.",
        },
      },
    ],
  };

  // ── JSON-LD: BreadcrumbList Schema ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Riverside Riders Fall Wheels Show",
        item: "https://riversideriderscarshow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About the Show",
        item: "https://riversideriderscarshow.com#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Trophy Classes",
        item: "https://riversideriderscarshow.com#awards",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Past Shows Gallery",
        item: "https://riversideriderscarshow.com#gallery",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Location & Directions",
        item: "https://riversideriderscarshow.com#location",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "FAQ",
        item: "https://riversideriderscarshow.com#faq",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Register Your Vehicle",
        item: "https://riversideriderscarshow.com#register",
      },
    ],
  };

  // ── JSON-LD: WebSite Schema ──
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://riversideriderscarshow.com/#website",
    name: "Riverside Riders Fall Wheels Show",
    alternateName: "Riverside Riders Car Show",
    url: "https://riversideriderscarshow.com",
    description:
      "Official website for the Riverside Riders Fall Wheels Show — the Fox Valley's premier free car, truck, and motorcycle show in St. Charles, Illinois.",
    publisher: {
      "@id": "https://riversideriderscarshow.com/#org",
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />

        {/* JSON-LD Structured Data — Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />

        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* JSON-LD Structured Data — FAQPage (triggers Google FAQ rich results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* JSON-LD Structured Data — BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* JSON-LD Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
