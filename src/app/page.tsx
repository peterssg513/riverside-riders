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
      <Hero />
      <About />
      <Awards />
      <Gallery />
      <CTABanner />
      <Location />
      <FAQ />
      <RegistrationForm />

      {/* SEO: Hidden text-rich content for search engines — visible to crawlers, visually hidden */}
      <section aria-hidden="true" className="sr-only">
        <h2>
          Riverside Riders Fall Wheels Show 2026 — Free Car Show in St. Charles,
          Illinois
        </h2>
        <p>
          The Riverside Riders Fall Wheels Show is the Fox Valley&apos;s premier
          free car, truck, and motorcycle show. Held annually at Riverside
          Community Church at 37W130 Crane Road in St. Charles, IL 60175, the
          5th Annual Fall Wheels Show takes place on Saturday, September 19, 2026
          from 11 AM to 3 PM with vehicle registration starting at 10 AM.
        </p>
        <p>
          This is a completely independent judged award show with six trophy
          classes: Best Stock Classic, Best Modified Classic, Best Modern Car
          (under 25 years), Best American Bike, Best Import Bike, and Best
          Classic Truck. Special judge awards include Best of Show and Least
          Likely to Make it Home. All trophies are top quality.
        </p>
        <p>
          The Fall Wheels Show features free entry for all participants and
          spectators — no entry fee. Enjoy free hot dogs, snacks, chips, drinks,
          and ice cream. Family fun activities include spacewalks, games, and
          more. Live sound and music provided by 3-D Sound.
        </p>
        <p>
          Proudly serving car show enthusiasts across the Fox Valley and western
          suburbs of Chicago including St. Charles, Geneva, Batavia, South Elgin,
          Campton Hills, Elgin, West Chicago, Wheaton, North Aurora, Aurora,
          Naperville, Wayne, DuPage County, and Kane County, Illinois.
        </p>
        <p>
          Whether you own a classic car, vintage automobile, hot rod, muscle car,
          antique vehicle, custom build, modern sports car, classic pickup truck,
          Harley-Davidson motorcycle, Indian motorcycle, or import bike — all
          wheels are welcome at the Riverside Riders Fall Wheels Show.
        </p>
        <p>
          Register your vehicle online today at riversideriderscarshow.com.
          Limited space available. Contact us at allwheelsshow@rccstc.org.
        </p>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
