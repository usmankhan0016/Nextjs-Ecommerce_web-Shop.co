import React from 'react'
import LatestOffer from './Offer'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
   <footer className='w-full max-w-screen-2xl mx-auto bg-[#F0F0F0] relative mt-36 pt-[70px] place-items-center'>
     {/* Offers component */}
        <div className='absolute top-[-140px] md:px-14'>
         <LatestOffer/>
        </div>
      {/* main navigation wrapper div */}
        <div className='w-[90%] flex flex-col gap-y-7 lg:flex-row lg:justify-between lg:items-center border-b border-b-[#0000001A] pt-[165px] pb-12'>
            {/* Brand Name and Socail div */}
            <div className='w-[250px]'>
                <Link href={"/"}>
                <h1 className='text-[28px] md:text-4xl font-extrabold'>SHOP.CO</h1>
                </Link>
                <p className='text-sm text-[#00000099] mt-2 md:mt-4'>We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                {/* Social Icons div */}
                <div className='flex items-center space-x-4 mt-5 md:mt-10'>
                    <FaTwitter size={22}/>
                    <FaFacebook size={22}/>
                    <FaInstagram size={22}/>
                    <FaGithub size={22}/>
                </div>
            </div>
            {/* Footer Navigation section */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12'>
              {/* COMPANY div */}
               <ul className='text-sm sm:text-base text-[#00000099] space-y-3'>
                <h1 className='text-sm sm:text-base font-[500] text-black mb-6'>COMPANY</h1>

                 <li><Link href={"/"}>About</Link></li>
                 <li><Link href={"/"}>Features</Link></li>
                 <li><Link href={"/"}>Works</Link></li>
                 <li><Link href={"/"}>Career</Link></li>   
               </ul>

              {/* HELP div */}
               <ul className='text-sm sm:text-base text-[#00000099] space-y-3'>
                <h1 className='text-sm sm:text-base font-[500] text-black mb-6'>HELP</h1>

                 <li><Link href={"/"}>Customer Support</Link></li>
                 <li><Link href={"/"}> Delivery Details</Link></li>
                 <li><Link href={"/"}>Terms & Conditons</Link></li>
                 <li><Link href={"/"}>Privacy Policy</Link></li>   
               </ul>

              {/* F&Q div */}
               <ul className='text-sm sm:text-base text-[#00000099] space-y-3'>
                <h1 className='text-sm sm:text-base font-[500] text-black mb-6'>F&Q</h1>

                 <li><Link href={"/"}>Account</Link></li>
                 <li><Link href={"/"}>Manage Deliveries</Link></li>
                 <li><Link href={"/"}>Orders</Link></li>
                 <li><Link href={"/"}>Payments</Link></li>   
               </ul>

              {/* RESOURCES div */}
               <ul className='text-sm sm:text-base text-[#00000099] space-y-3'>
                <h1 className='text-sm sm:text-base font-[500] text-black mb-6'>RESOURCES</h1>

                 <li><Link href={"/"}>Free eBooks</Link></li>
                 <li><Link href={"/"}>Development Tutorial</Link></li>
                 <li><Link href={"/"}>How to - Blog</Link></li>
                 <li><Link href={"/"}>Youtube Playlist</Link></li>   
               </ul>
            </div>


        </div>
        {/* Copy-right & Payments section  */}
        <div className='w-[90%] flex flex-col items-center gap-3 md:flex-row md:justify-between mt-14'>
            <p className='text-sm text-[#00000099]'>Shop.co <span>&copy;</span> 2000-2023, All Rights Reserved</p>
            {/* Payments Icons */}
            <div className='flex items-center'>
              <Image src={"/visa.png"} alt='payment-icon' width={65} height={65}></Image>   
              <Image src={"/master.png"} alt='payment-icon' width={65} height={65}></Image>   
              <Image src={"/apple-pay.png"} alt='payment-icon' width={65} height={65}></Image>   
              <Image src={"/G-pay.png"} alt='payment-icon' width={65} height={65}></Image>   
            </div>

        </div>
   </footer>
  )
}

export default Footer
