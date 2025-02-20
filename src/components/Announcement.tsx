import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Announcement() {
  return (
   <main className='w-full h-[38px] max-w-screen-2xl mx-auto bg-[#000000] px-2 flex justify-center items-center relative'>
    {/* Text content */}
    <div>
        <h3 className='text-white text-xs sm:text-sm'>Sign up and get 20% off to your first order. <span className='text-xs sm:text-sm font-[500] underline cursor-pointer'>Sign Up Now</span></h3>
    </div>
    {/* Icon */}
    <FaPlus className='text-white absolute right-20 hidden sm:block'/>
   </main>
  )
}

export default Announcement
