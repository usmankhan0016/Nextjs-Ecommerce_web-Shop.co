"use client"
import React from 'react'
import { FaStar ,FaStarHalf } from "react-icons/fa";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Check, Minus, Plus } from 'lucide-react';
import Allreviews from '@/components/Allreviews';
import { BreadcrumbDemo } from '@/components/Breadcrumb';
import MightProducts from '@/components/MightLike';


interface Iproducts{
    id: number,
    title: string,
    price: string,
    rating_star: any[];
    rating: string,
    old_price?: string,
    image_url: string,
    image1: string,
    image2: string,
    image3: string
}
let products: Iproducts[] = [
    {
      id: 1,
      title: "T-SHIRT WITH TAPE DETAILS",
      rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$120" ,
      image_url: "/product1.png",
      image1: "/product1.png",
      image2: "/product1.png",
      image3: "/product1.png",
    },
    {
      id: 2,
      title: "SKINNY FIT JEANS",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "3.5/5",
      price: "$240" ,
      image_url: "/product2.png",
      old_price: "$260",
      image1: "/product2.png",
      image2: "/product2.png",
      image3: "/product2.png",
    },
    {
      id: 3,
      title: "CHECKERED SHIRT",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$180" ,
      image_url: "/product3.png",
      image1: "/product3.png",
      image2: "/product3.png",
      image3: "/product3.png",
    },
    {
      id: 4,
      title: "SLEEVE STRIPED T-SHIRT",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$130" ,
      image_url: "/product4.png",
      old_price: "$160",
      image1: "/product4.png",
      image2: "/product4.png",
      image3: "/product4.png",
    },
    {
        id: 5,
        title: "VERTICAL STRIPED SHIRT",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "5.0/5",
        price: "$212" ,
        old_price: "$232",
        image_url: "/product5.png",
        image1: "/product5.png",
        image2: "/product5.png",
        image3: "/product5.png",
      },
      {
        id: 6,
        title: "COURAGE GRAPHIC T-SHIRT",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.0/5",
        price: "$145" ,
        image_url: "/product6.png",
        image1: "/product6.png",
        image2: "/product6.png",
        image3: "/product6.png",
      },
      {
        id: 7,
        title: "LOOSE FIT BERMUDA SHORTS",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "3.0/5",
        price: "$80" ,
        image_url: "/product7.png",
        image1: "/product7.png",
        image2: "/product7.png",
        image3: "/product7.png",
      },
      {
        id:8,
        title: "FADED SKINNY JEANS",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.5/5",
        price: "$210" ,
        image_url: "/product8.png",
        image1: "/product8.png",
        image2: "/product8.png",
        image3: "/product8.png",
      },
      {
        id: 9,
        title: "Polo with Contrast Trims",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.0/5",
        price: "$212" ,
        old_price:"$242",
        image_url: "/product9.png",
        image1: "/product9.png",
        image2: "/product9.png",
        image3: "/product9.png",
      },
      {
        id: 10,
        title: "Gradient Graphic T-shirt",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "3.5/5",
        price: "$145" ,
        image_url: "/product10.png",
        image1: "/product10.png",
        image2: "/product10.png",
        image3: "/product10.png",
      },
      {
        id: 11,
        title: "Polo with Tipping Details",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.5/5",
        price: "$180" ,
        image_url: "/product11.png",
        image1: "/product11.png",
        image2: "/product11.png",
        image3: "/product11.png",
      },
      {
        id: 12,
        title: "Black Striped T-shirt",
        rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "5.0/5",
        price: "$120" ,
        image_url: "/product12.png",
        old_price: "$150",
        image1: "/product12.png",
        image2: "/product12.png",
        image3: "/product12.png",
      }
];

function ProductDetails() {

// Getting route parameter
 const param = useParams() //Returned an object like this "id: param"
 const Id = param.id;
//  filtering product throught id's
const item = products.find((e)=> (e.id === Number(Id)));
if(!item){
   return <h1 className='text-xl font-bold text-center'>Product not found!</h1>
}

  return (
    <>
    {/* breadcrumb navigatin div */}
    <div className='px-4 lg:px-10 xl:px-20 mt-2 max-w-screen-2xl mx-auto'><BreadcrumbDemo/></div>
    {/* Main div */}
    <div className='w-full max-w-screen-2xl mx-auto lg:px-5 xl:px-14 flex flex-col xl:flex-row items-center lg:justify-between mt-12' key={item.id}>
      {/* left section */}
      <div className='flex flex-col lg:flex-row gap-3 items-center w-[360px] xs:w-[400px] sm:w-[630px] lg:w-auto px-4'>
        <div className='w-full lg:w-[152px] flex flex-row lg:flex-col gap-3 lg:gap-y-3 order-2 lg:order1'>
          <Image className='h-[110px] xs:h-[125px] sm:h-[180px] lg:w-full lg:h-[167px] rounded-[20px]' src={item.image1} alt='product-image' width={100} height={100}></Image>
          <Image className='h-[110px] xs:h-[125px] sm:h-[180px] lg:w-full lg:h-[167px] rounded-[20px]' src={item.image2} alt='product-image' width={100} height={100}></Image>
          <Image className='h-[110px] xs:h-[125px] sm:h-[180px] lg:w-full lg:h-[167px] rounded-[20px]' src={item.image3} alt='product-image' width={100} height={100}></Image>
        </div>
        <div className='w-full h-[290px] sm:h-[330px] lg:w-[444px] lg:h-[530px] order-1 lg:order-3'>
        <Image className='w-full h-full rounded-[20px]' src={item.image_url} alt='product-image' width={250} height={250}></Image>
        </div>
      </div>
      {/* Right section */}
      <div className='w-full mt-5 px-4'>
        <h1 className='text-2xl md:text-3xl lg:text-[40px] font-extrabold'>{item.title}</h1>
        <div className='flex items-center mt-2 text-yellow-400'>{item.rating_star.map((star,index)=> (<span key={index}>{star}</span>))}<p className="ml-1 text-xs md:text-sm text-gray-600">{item.rating}</p></div>
        <p className="text-2xl md:text-[32px] font-bold mt-4">{item.price} <span className="text-gray-400 line-through ml-2">{item.old_price}</span></p>
        <p className='text-sm md:text-base text-[#00000099] mt-3'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
       {/* color main div */}
       <div className='h-[95px] border-t-[1px] border-t-[#0000001A] border-b-[1px] border-b-[#0000001A] mt-3'>
          <p className='text-sm md:text-base text-[#00000099] my-2'>Select Colors</p>
          <div className='flex items-center gap-4'>
            <div className='w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#4F4631] flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100'/></div>
            <div className='w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#314F4A] flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100'/></div>
            <div className='w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#31344F] flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100'/></div>
          </div>
       </div>
       {/* Choose size div */}
       <div className='h-[100px] border-b-[1px] border-b-[#0000001A] mt-3'>
          <p className='text-sm md:text-base text-[#00000099] my-3'>Choose Size</p>
          <div className='flex items-center space-x-3'>
            <div className='w-[74px] h-[39px] md:w-[86px] md:h-[46px] rounded-[62px] text-sm md:text-base text-[#00000099] active:text-white bg-[#F0F0F0]  active:bg-black flex justify-center items-center'>Small</div>
            <div className='w-[90px] h-[39px] md:w-[105px] md:h-[46px] rounded-[62px] text-sm md:text-base text-[#00000099] active:text-white bg-[#F0F0F0] active:bg-black  flex justify-center items-center'>Medium</div>
            <div className='w-[76px] h-[39px] md:w-[89px] md:h-[46px] rounded-[62px] text-sm md:text-base text-[#00000099] active:text-white bg-[#F0F0F0]  active:bg-black flex justify-center items-center'>Large</div>
            <div className='w-[89px] h-[39px] md:w-[104px] md:h-[46px] rounded-[62px] text-sm md:text-base text-[#00000099] active:text-white bg-[#F0F0F0] active:bg-black  flex justify-center items-center'>X-Large</div>
          </div>
       </div>
        {/* Cart button */}
        <div className='flex items-center mt-6'>
          <div className='w-[110px] h-11 md:w-[170px] md:h-[52px] rounded-[62px] flex justify-between items-center px-3 bg-[#F0F0F0]'>
            <Minus className='h-5 md:h-6 cursor-pointer'/>
            <span className='text-sm md:text-base'>1</span>
            <Plus className='h-5 md:h-6 cursor-pointer'/>
          </div>
          <button className='w-[215px] h-11 md:w-[400px] md:h-[52px] rounded-[62px] bg-black text-white ml-4 md:ml-7'>Add to Cart</button>
        </div>
      </div>
  
    </div>
       {/* Slider div */}
       <div className='max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-3 mt-14'>
        <div className='border-b border-b-[#0000001A] flex justify-center items-center text-sm text-center xs:text-base lg:text-xl text-[#00000099] pb-3'>Product Details</div>
        <div className='border-b-2 border-b-black flex justify-center items-center text-sm text-center xs:text-base lg:text-xl text-black pb-3'>Rating & Reveiws</div>
        <div className='border-b border-b-[#0000001A] flex justify-center items-center text-sm text-center xs:text-base lg:text-xl text-[#00000099] pb-3'>F&Qs</div>
      </div>
    <Allreviews/>
    <MightProducts/>
    </>
  )
}

export default ProductDetails
