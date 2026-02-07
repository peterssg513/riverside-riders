import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Awards from "@/components/Awards";
import CTABanner from "@/components/CTABanner";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Semantic article wrapper with microdata hints */}
      <article itemScope itemType="https://schema.org/Event">
        <meta itemProp="name" content="Riverside Riders Fall Wheels Show 2026" />
        <meta itemProp="startDate" content="2026-09-19T11:00:00-05:00" />
        <meta itemProp="endDate" content="2026-09-19T15:00:00-05:00" />
        <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
        <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />
        <meta itemProp="isAccessibleForFree" content="true" />
        <meta itemProp="image" content="https://riversideriderscarshow.com/images/show-1.jpeg" />
        <span itemProp="location" itemScope itemType="https://schema.org/Place">
          <meta itemProp="name" content="Riverside Community Church" />
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="streetAddress" content="37W130 Crane Road" />
            <meta itemProp="addressLocality" content="St. Charles" />
            <meta itemProp="addressRegion" content="IL" />
            <meta itemProp="postalCode" content="60175" />
            <meta itemProp="addressCountry" content="US" />
          </span>
        </span>
        <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/LimitedAvailability" />
          <meta itemProp="url" content="https://riversideriderscarshow.com#register" />
        </span>

        <Hero />
        <About />
        <Awards />
        <Gallery />
        <CTABanner />
        <Location />
        <FAQ />
        <RegistrationForm />
      </article>

      {/* ════════════════════════════════════════════════════════════════
          SEO: Keyword-rich content — visible to crawlers, visually hidden.
          Covers all search intents: event, location, vehicles, features,
          seasonal, registration, and local community terms.
          ════════════════════════════════════════════════════════════════ */}
      <section aria-hidden="true" className="sr-only">
        {/* ── Primary Event Description ── */}
        <h1>
          Riverside Riders Fall Wheels Show 2026 — Free Car Show in St. Charles,
          Illinois | September 19, 2026
        </h1>
        <p>
          The Riverside Riders Fall Wheels Show is the Fox Valley&apos;s premier
          free car show, truck show, and motorcycle show. Now in its 5th year,
          the Fall Wheels Show takes place on Saturday, September 19, 2026 at
          Riverside Community Church, 37W130 Crane Road, St. Charles, IL 60175.
          Vehicle registration begins at 10 AM and the show runs from 11 AM to
          3 PM. This is the biggest and best car show in the St. Charles,
          Illinois area and the entire Fox Valley region.
        </p>

        {/* ── Trophy Classes & Judging ── */}
        <h2>
          Trophy Classes — Independently Judged Car Show Awards
        </h2>
        <p>
          The Fall Wheels Show is a completely independent judged award show
          featuring seven trophy classes: Best Classic Stock Car (1900-1970),
          Best Classic Stock Car (1971-1999), Best Modified Classic Car
          (1900-1970), Best Modified Stock Car (1971-1999), Best Modern Car
          or Truck (2000 or above), Best Classic Truck (Pre-2000), and Best
          Motorcycles (All Years and Makes). Two special judge awards —
          Gimme Your Keys (the car the judges all want) and Least Likely to
          Make it Home — recognize the ride everyone wishes they could drive
          home and the fan-favorite with the most character. All
          trophies are top quality. Whether you have a classic car, vintage
          automobile, antique car, hot rod, muscle car, custom build, modified
          classic, modern sports car, modern truck, classic pickup truck,
          Harley-Davidson motorcycle, Indian motorcycle, Honda, Kawasaki,
          Ducati, BMW, or any other motorcycle — there is a class for you.
        </p>

        {/* ── Free Entry & Food ── */}
        <h2>
          Free Car Show — No Entry Fee, Free Food & Drinks
        </h2>
        <p>
          There is absolutely no entry fee for the Riverside Riders Fall Wheels
          Show. Registration is free for all participants. Spectator admission
          is also free — no tickets required. In addition to free entry, enjoy
          complimentary food and beverages all day: free hot dogs, free snacks,
          free chips, free drinks, and free ice cream. This is a free car show
          with free food, making it one of the best free events in the Fox
          Valley, St. Charles, and the western suburbs of Chicago.
        </p>

        {/* ── Family Activities & Entertainment ── */}
        <h2>
          Family Friendly Car Show — Live Music, Spacewalks & Games
        </h2>
        <p>
          The Fall Wheels Show is a family friendly car show with activities for
          all ages. Live sound and music provided by 3-D Sound keeps the energy
          going throughout the entire event. Family fun activities include
          spacewalks for kids, outdoor games, and more. Whether you&apos;re a
          car enthusiast, motorcycle lover, or just looking for a fun family
          event in St. Charles, this is the perfect weekend outing. Kid friendly
          activities make this a great family event in the Fox Valley.
        </p>

        {/* ── Vehicle Types ── */}
        <h2>
          Classic Cars, Motorcycles, Trucks — All Wheels Welcome
        </h2>
        <p>
          The Riverside Riders Fall Wheels Show welcomes all types of vehicles.
          Classic cars and vintage automobiles from every era. Hot rods and
          muscle cars with raw power and style. Modified classics with custom
          bodywork, paint, and performance upgrades. Modern cars and sports cars
          under 25 years old. Classic pickup trucks showcasing American hauling
          heritage. American motorcycles including Harley-Davidson, Indian, and
          more. Import motorcycles including Honda, Kawasaki, Yamaha, Suzuki,
          Ducati, BMW, Triumph, KTM, and more. If it has wheels, bring it to
          the Fall Wheels Show in St. Charles, IL.
        </p>

        {/* ── Location & Directions ── */}
        <h2>
          Car Show Location — Riverside Community Church, St. Charles, IL
        </h2>
        <p>
          The Riverside Riders Fall Wheels Show is held at Riverside Community
          Church (RCC), located at 37W130 Crane Road, St. Charles, IL 60175.
          The venue offers ample parking and is easily accessible from all
          directions. Whether you&apos;re coming from St. Charles, Geneva,
          Batavia, South Elgin, Campton Hills, Elgin, West Chicago, Wheaton,
          North Aurora, Aurora, Naperville, Wayne, or anywhere in DuPage County
          or Kane County, the show is just a short drive away. Located in the
          heart of the Fox Valley, the venue is centrally positioned for car
          show enthusiasts across the western suburbs of Chicago and greater
          Chicagoland area.
        </p>

        {/* ── Local Area Coverage ── */}
        <h2>
          Car Show Near Me — Serving St. Charles, Geneva, Batavia, South Elgin,
          Campton Hills & the Fox Valley
        </h2>
        <p>
          Looking for a car show near me? The Riverside Riders Fall Wheels Show
          is the top car show in the Fox Valley and Tri-Cities area of Illinois.
          We proudly serve car show enthusiasts, classic car collectors,
          motorcycle riders, and truck owners from: St. Charles IL, Geneva IL,
          Batavia IL, South Elgin IL, Campton Hills IL, Elgin IL, West Chicago
          IL, Wheaton IL, North Aurora IL, Aurora IL, Naperville IL, Wayne IL,
          Carol Stream IL, Warrenville IL, Winfield IL, Sugar Grove IL, Big Rock
          IL, Lily Lake IL, Elburn IL, Maple Park IL, Burlington IL, Hampshire
          IL, Gilberts IL, Pingree Grove IL, Huntley IL, Algonquin IL, Lake in
          the Hills IL, Crystal Lake IL, Bartlett IL, Streamwood IL, Hanover
          Park IL, Schaumburg IL, Hoffman Estates IL, and communities throughout
          DuPage County, Kane County, McHenry County, Cook County, DeKalb
          County, and Kendall County, Illinois.
        </p>

        {/* ── September / Seasonal Events ── */}
        <h2>
          September Events Illinois 2026 — Fall Events Near Me
        </h2>
        <p>
          Looking for things to do in September 2026? The Riverside Riders Fall
          Wheels Show is one of the best September events in Illinois. Held on
          Saturday, September 19, 2026, this fall car show is the perfect
          weekend event for car lovers and families. September events in St.
          Charles, September events in the Fox Valley, September events near
          Chicago — the Fall Wheels Show is your must-attend fall event. It&apos;s
          also a great alternative to other fall festivals, providing a unique
          car show experience with free food, live music, and family activities.
          Things to do in St. Charles IL this fall, things to do in Geneva IL
          this September, weekend events in the Fox Valley — the Fall Wheels
          Show has you covered.
        </p>

        {/* ── Registration ── */}
        <h2>
          Register Your Vehicle — Free Online Car Show Registration
        </h2>
        <p>
          Register your vehicle for the Riverside Riders Fall Wheels Show 2026
          at riversideriderscarshow.com. Car show registration is free and takes
          less than 2 minutes. You can register multiple vehicles — cars,
          trucks, and motorcycles. Select your vehicle type, year, make, model,
          and trophy class. You&apos;ll receive a confirmation email with your
          registration details and event information. Space is limited, so
          register your ride today. Car show registration, car show sign up,
          enter car show, car show entry form — it&apos;s all right here at
          riversideriderscarshow.com.
        </p>

        {/* ── Event History ── */}
        <h2>
          5th Annual Riverside Riders Fall Wheels Show — Est. 2022
        </h2>
        <p>
          The Riverside Riders have been hosting the Fall Wheels Show since
          2022, and 2026 marks the 5th Annual show. Each year, the event has
          grown in size and quality, attracting more vehicles, more spectators,
          and more community support. Past shows have featured hundreds of
          stunning vehicles from across Illinois. The Riverside Riders are a
          dedicated group of automotive enthusiasts committed to bringing the
          car show community together in St. Charles, Illinois. Riverside
          Riders car show, RCC Fall Wheels Show, Riverside Community Church
          car show — all names for the Fox Valley&apos;s best automotive event.
        </p>

        {/* ── Contact ── */}
        <h2>Contact — Riverside Riders Fall Wheels Show</h2>
        <p>
          For questions about the Riverside Riders Fall Wheels Show, email
          allwheelsshow@rccstc.org. Visit riversideriderscarshow.com for
          registration, event details, trophy classes, past show photos,
          frequently asked questions, and directions to Riverside Community
          Church at 37W130 Crane Road, St. Charles, IL 60175.
        </p>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
