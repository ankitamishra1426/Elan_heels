import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import BrandStory from "@/components/home/BrandStory";
import Newsletter from "@/components/home/Newsletter";
import Services from "@/components/home/Services";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";

export default function Home() {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <NewArrivals />
        <BestSellers />
        <Services/>
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}