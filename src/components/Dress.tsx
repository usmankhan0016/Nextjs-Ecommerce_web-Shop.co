import Image from 'next/image'
import React from 'react'

function DressStyle() {
  return (
    <div className='w-full max-w-screen-2xl mx-auto bg-white flex justify-center items-center pt-16'>
       {/* Outer Round div */}
       <div className='w-[85%] h-full bg-[#F0F0F0] rounded-[40px] flex flex-col items-center px-6 sm:px-10 pb-10'>
         {/* Top heading div */}
            <div className='text-center'>
              <h1 className='text-3xl md:text-5xl font-extrabold mt-14'>BROWSE BY DRESS STYLE</h1>
            </div>
        {/* Bottom div */}
         <div className='flex flex-wrap justify-center items-center mt-14'>
            <div className='w-full md:w-[400px] h-[220px] m-[6px] relative'><Image className='w-full h-full rounded-[20px]' src={"/DressStyle1.png"} alt='DressStyle-Image' width={100} height={100}>
            </Image>
             <p className='absolute top-6 left-7 text-2xl md:text-3xl font-bold'>Casual</p>
            </div>
            <div className='w-full md:w-[550px] h-[220px] m-[6px] relative'><Image className='w-full h-full rounded-[20px]' src={"/DressStyle2.png"} alt='DressStyle-Image' width={100} height={100}>
            </Image>
             <p className='absolute top-6 left-7 text-2xl md:text-3xl font-bold'>Formal</p>
            </div>
            <div className='w-full md:w-[550px] h-[220px] m-[6px] relative'><Image className='w-full h-full rounded-[20px]' src={"/DressStyle3.png"} alt='DressStyle-Image' width={100} height={100}>
            </Image>
             <p className='absolute top-6 left-7 text-2xl md:text-3xl font-bold'>Party</p>
            </div>
            <div className='w-full md:w-[400px] h-[220px] m-[6px] relative'><Image className='w-full h-full rounded-[20px]' src={"/DressStyle4.png"} alt='DressStyle-Image' width={100} height={100}>
            </Image>
             <p className='absolute top-6 left-7 text-2xl md:text-3xl font-bold'>Gym</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default DressStyle
