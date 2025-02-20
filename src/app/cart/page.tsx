import { CartBreadcrumb } from '@/components/CartBreadcrumb'
import { ArrowBigRight, ArrowRight, Delete, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface IcartItem{
   id: number
   title: string
   size: string
   color: string
   price: string
   image_url: string
}

const cartProducts:IcartItem[] =[
    {
     id: 1,
     title:"Gradient Graphic T-shirt",
     size:"Large",
     color:"White",
     price:"$145",
     image_url: "/product10.png"        
    },
    {
     id: 2,
     title:"CHECKERED SHIRT",
     size:"Medium",
     color:"Red",
     price:"$180",
     image_url: "/product3.png"        
    },
    {
     id: 3,
     title:"SKINNY FIT JEANS",
     size:"Large",
     color:"Blue",
     price:"$240",
     image_url: "/product2.png"        
    },
]

function Cart() {
  return (
    <>
    {/* Breadcrumb and heading div */}
     <div className="px-4 md:px-7 xl:px-[80px] my-3 max-w-screen-2xl mx-auto">
      <CartBreadcrumb/>
      <h1 className='text-[32px] md:text-[40px] font-extrabold mt-3'>YOUR CART</h1>
     </div>
   <main className='flex flex-col md:flex-row gap-4 justify-center px-3 md:px-8'>
     {/* LEFT SECTION */}
    <div className='w-full md:w-[715px] border rounded-[20px] p-3 md:p-5 space-y-4'>
        {
            cartProducts.map((item)=> (
               // Main product div
               <div className=' flex justify-between border-b border-b-[#0000001A] pb-3 md:pb-4' key={item.id}>
                 {/* Image and detail div */}
                    <div className='flex gap-2'>
                        <Image className='rounded-[8px] w-[100px] h-[100px] md:w-[130px] md:h-[130px]' src={item.image_url} alt={item.title} width={130} height={130}/>
                        <div>
                            <h1 className='text-base md:text-xl font-bold'>{item.title}</h1>
                            <p className='text-sm text-[#00000099] mt-1'><span className='text-black'>Size:</span>{item.size}</p>
                            <p className='text-sm text-[#00000099] mt-1'><span className='text-black'>Color:</span>{item.color}</p>
                            <p className='text-xl md:text-2xl font-bold mt-4'>{item.price}</p>
                        </div>
                    </div>
                     {/* Delete and btn's */}
                      <div className='flex flex-col justify-between items-end'>
                        <Delete className='cursor-pointer'/>
                        <div className='w-[105px] h-8 md:w-[126px] md:h-[44px] rounded-[62px] flex justify-between items-center px-3 bg-[#F0F0F0]'>
                            <Minus className='h-5 md:h-6 cursor-pointer'/>
                            <span className='text-sm md:text-base'>1</span>
                            <Plus className='h-5 md:h-6 cursor-pointer'/>
                        </div>
                      </div>  
               </div>
            ))
        }
    </div>
        {/* RIGHT SECTION */}
        <div className='w-full md:w-[505px] h-[410px] md:h-[440px] border border-[#0000001A] rounded-[20px] p-5'>
          <h1 className='text-xl md:text-2xl font-bold'>Order Summary</h1>
          {/* Amount calculation div */}
          <div className='mt-5 space-y-4 pb-4 border-b border-b-[#0000001A]'>
            <p className='flex justify-between text-base md:text-xl text-[#00000099]'>Subtotal <span className='font-bold text-black'>$565</span></p>
            <p className='flex justify-between text-base md:text-xl text-[#00000099]'>Discount (-20%) <span className='font-bold text-black'>-$113</span></p>
            <p className='flex justify-between text-base md:text-xl text-[#00000099]'>Delivery Fee<span className='font-bold text-black'>$15</span></p>
          </div>
          <p className='flex justify-between text-base md:text-xl mt-4'>Total <span className='font-bold text-black'>$456</span></p>
           {/* Input and btn div */}
           <div className='w-full h-12 flex justify-between gap-3 mt-5'>
             <input className='w-full h-full bg-[#F0F0F0] outline-none rounded-[62px] p-3' type="text" placeholder='Add promo code' />
             <button className='w-[120px] h-12 rounded-[62px] bg-black text-white font-[500]'>Apply</button>
           </div>
           <button className='w-full h-14 bg-black text-sm md:text-base text-white font-[500] rounded-[62px] flex justify-center items-center gap-2 mt-7'>Go to Checkout <ArrowRight/></button>

        </div>

   </main>
   </>
  )
}

export default Cart
