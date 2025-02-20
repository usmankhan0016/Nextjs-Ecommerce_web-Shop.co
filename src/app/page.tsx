import BrandFonts from "@/components/BrandFonts";
import Hero from "@/components/Hero";
import Products from "./products/page";
import DressStyle from "@/components/Dress";
import CustomerCarousel from "@/components/Carousel";



export default function Home() {
  return (
   <>
   <Hero/>
   <BrandFonts/>
   <Products/>
   <DressStyle/>
   <CustomerCarousel/>
   </>
  );
}
