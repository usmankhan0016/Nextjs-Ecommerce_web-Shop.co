import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
   <main className='w-full max-w-screen-2xl mx-auto bg-[#F2F0F1] flex flex-col md:flex-row justify-between'>
    {/* left section */}
    <div className='w-full md:w-[550px] px-4 mt-7 md:mt-20 md:ml-24'>
        <h1 className='text-4xl md:text-6xl font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-sm md:text-base text-gray-600 mt-3'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        {/* wrapper div for button */}
        <div className='w-full flex justify-center md:justify-normal'>
        <button className='w-[318px] h-[52px] md:w-[210px] bg-black text-white hover:text-slate-300 rounded-[60px] mt-4'>Shop Now</button>
        </div>
    </div>
    {/* right section */}
    <div className='relative'>
     <Image src={"/profile.jpg"} alt='profile-image' width={550} height={550} className='md:mr-12'></Image>
     <Image src={"/star.png"} alt='star-icon' width={70} height={70} className='lg:w-[100px] absolute top-10 right-7 md:top-16 md:right-14'></Image>
     <Image src={"/star.png"} alt='star-icon' width={44} height={44} className='lg:w-[56px] absolute top-32 left-7 md:top-60 md:left-8'></Image>

    </div>
   </main>
  )
}

export default Hero
