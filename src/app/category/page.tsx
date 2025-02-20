import { AccordionDemo } from "@/components/Accordion";
import { CasualBreadcrumb } from "@/components/CasualBreadcrumb";
import CategoryProducts from "@/components/CategoryProducts";
import { CheckboxDemo } from "@/components/ColorsBox";
import { DressStyle } from "@/components/DressStyle";
import { PaginationDemo } from "@/components/Pagination";
import { SliderDemo } from "@/components/PriceSlider";
import SizesButton from "@/components/SizesButton";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";

function CategoryPage() {
  return (
    <>
        {/* Breadcrumb div */}
        <div className="px-4 md:px-7 xl:px-[80px] mt-3 mb-5 max-w-screen-[1636px] mx-auto">
          <CasualBreadcrumb/>
        </div>
      <main className="flex flex-col md:flex-row justify-center gap-3 px-3 max-w-screen-2xl mx-auto">
        {/* left section */}
        <div className="md:w-[295px] md:h-[1425px] border border-[#0000001A] rounded-[20px] ml-2">
          {/* FILTER DIV */}
          <div className="p-5">
            {/* Top div  */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Filters</h1>
              <Image
                className="hidden md:block"
                src={"/gray_filter.png"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            {/* Wrapper div */}
            <div className="border-y border-y-[#0000001A] mt-5 py-4">
              <AccordionDemo />
            </div>
          </div>
          {/* PRICE DIV */}
          <div className="p-5">
            {/* Top div  */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Price</h1>
              <ChevronUp />
            </div>
            {/* wrapper div */}
            <div className="border-b border-b-[#0000001A] py-6">
              <SliderDemo />
              <p className="flex justify-between text-sm font-[500] mt-2">
                $50 <span>$200</span>
              </p>
            </div>
          </div>
          {/* COLORS DIV */}
          <div className="p-5">
            {/* Top div */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Colors</h1>
              <ChevronUp />
            </div>
            {/* Bottom color div */}
            <div className="border-b border-b-[#0000001A] py-6">
              <CheckboxDemo />
            </div>
          </div>
          {/* SIZE DIV */}
          <div className="p-5">
            {/* Top div */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Size</h1>
              <ChevronUp />
            </div>
            {/* Bottom sizes div */}
            <div className="border-b border-b-[#0000001A] py-6">
              <SizesButton />
            </div>
          </div>
          {/* DRESS-STYLE DIV */}
          <div className="p-5">
            {/* Top div */}
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Dress Style</h1>
              <ChevronUp />
            </div>
            {/*Bottom div  */}
            <div className="py-3">
              <DressStyle />
              <button className="w-full h-12 rounded-[62px] bg-black text-white hover:text-[#F0F0F0] font-[500] mt-3">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[70%] border-b border-b-[#0000001A] pb-5">
          {/* Top div */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Casual</h1>
            {/* Text wrapper div */}
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-base text-[#00000099]">Showing 1-10 of 100 Products</p>
              <div className='w-10 h-10 md:w-12 md:h-12 md:hidden rounded-[62px] flex justify-center items-center bg-[#F0F0F0]'><Image className='w-5 h-5 md:w-6 md:h-6' src={"/filter-icon.png"} alt='icon' width={24} height={24}/></div>            
              <p className="hidden md:flex gap-2 items-end text-xs md:text-sm text-[#00000099]">Sort by: <span className="flex items-end text-black font-[500] cursor-pointer">Most Popular <ChevronDown/></span></p>
            </div>
          </div>
          {/* Bottom Products div */}
          <div>
            <CategoryProducts/>
            </div> 
        </div>

        
      </main>
       {/* PAGINATION DIV */}
        <div className="mt-6">
          <PaginationDemo/>
        </div>
    </>
  );
}

export default CategoryPage;
