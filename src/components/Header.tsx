import Link from 'next/link'
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { SheetSide } from './menu';
import { NavigationMenuDemo } from './NavigationDropdown';

function Header() {
  return (
    <header className='px-4 md:px-8 xl:px-[80px]'>
        {/* Main header div */}
        <div className='w-full max-w-screen-2xl mx-auto border-b border-b-[#0000001A] h-[89px] bg-white flex justify-between items-center'>
            {/* Left Logo */}
            <div className='flex items-center text-black text-[25px] md:text-[32px] font-extrabold'>
            <div className='md:hidden'>
            <SheetSide/>    
            </div>
            <Link href={'/'}>SHOP.CO</Link>
            </div>
            {/* Nav-Links */}
            <ul className='hidden md:flex gap-6 text-sm xl:text-base mx-3 items-center'>
                <li>
                    <Link href={""}><NavigationMenuDemo/></Link>
                </li>

                <li>
                    <Link href={"/products"}>On Sales</Link>
                </li>

                <li>
                    <Link href={"/products"}>New Arrivals</Link>
                </li>

                <li>
                    <Link href={"/category"}>Brands</Link>
                </li> 
            </ul>
            {/* Search Input */}
            <div className='w-[577px] h-12 hidden md:flex items-center gap-3 rounded-[62px] py-3 px-4 bg-[#F0F0F0]'>
                <CgSearch size={24} className='hover:opacity-50'/>
                <input className='w-full h-full bg-transparent outline-none text-sm placeholder:text-base' type="text" placeholder='Search for products...' />
            </div>
            {/* Cart & Account Icons */}
            <div className='flex gap-[14px] items-center cursor-pointer ml-2'>
                <CgSearch size={24} className='md:hidden'/>
                <Link href={"/cart"}>
                <LuShoppingCart size={24} className='hover:opacity-30'/>
                </Link>
                <RiAccountCircleLine size={24} className='hover:opacity-30'/>
            </div>
        </div>
    </header>
  )
}

export default Header
