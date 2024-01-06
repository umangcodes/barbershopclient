"use client"
import Intro from "@/components/Landing/Intro";
import ProductCards from "@/components/Landing/ProductCards";
import ServiceCards from "@/components/Landing/ServiceCards";
import Welcome from "@/components/Landing/Welcome";
import BookToday from "@/components/banners/BookToday";
import BrandRoller from "@/components/banners/BrandRoller";
import Specials from "@/components/banners/Specials";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className='w-full'>
        <Welcome />
        <Intro />
        <ServiceCards />
        <Specials />
        <ProductCards />
        <BookToday />
        <BrandRoller />
        <Footer />
      </div>
    </main>
  )
}
