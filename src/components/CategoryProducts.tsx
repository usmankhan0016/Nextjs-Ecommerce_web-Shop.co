import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa6';

interface Iproducts{
    id: number,
    title: string,
    price: string,
    rating_star: any[];
    rating: string,
    old_price?: string,
    image_url: string
}
let products: Iproducts[] = [
    {
      id: 1,
      title: "T-SHIRT WITH TAPE DETAILS",
      rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$120" ,
      image_url: "/product1.png"
    },
    {
      id: 2,
      title: "SKINNY FIT JEANS",
      rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "3.5/5",
      price: "$240" ,
      image_url: "/product2.png",
      old_price: "$260"
    },
    {
      id: 3,
      title: "CHECKERED SHIRT",
      rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$180" ,
      image_url: "/product3.png"
    },
    {
        id: 10,
        title: "Gradient Graphic T-shirt",
        rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "3.5/5",
        price: "$145" ,
        image_url: "/product10.png",
    },
    {
        id: 11,
        title: "Polo with Tipping Details",
        rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.5/5",
        price: "$180" ,
        image_url: "/product11.png"
    },
    {
        id: 4,
        title: "SLEEVE STRIPED T-SHIRT",
        rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
        rating: "4.5/5",
        price: "$130" ,
        image_url: "/product4.png",
        old_price: "$160"
    },
    {
            id: 5,
            title: "VERTICAL STRIPED SHIRT",
            rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
            rating: "5.0/5",
            price: "$212" ,
            old_price: "$232",
            image_url: "/product5.png"
        },
        {
            id: 6,
            title: "COURAGE GRAPHIC T-SHIRT",
            rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
            rating: "4.0/5",
            price: "$145" ,
            image_url: "/product6.png",
        },
        {
            id: 7,
            title: "LOOSE FIT BERMUDA SHORTS",
            rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
            rating: "3.0/5",
            price: "$80" ,
            image_url: "/product7.png"
        },
        {
            id:8,
            title: "FADED SKINNY JEANS",
            rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
            rating: "4.5/5",
            price: "$210" ,
            image_url: "/product8.png",
        },
        {
                id: 12,
                title: "Black Striped T-shirt",
                rating_star:[<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
                rating: "5.0/5",
                price: "$120" ,
                image_url: "/product12.png",
                old_price: "$150",
            }
];

function CategoryProducts() {
  return (
    <div>
        {/* Grid type div */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-5 md:gap-y-8 mt-5">
        {
            products.map((data,index)=> {
               return(
                // main product div
                <div key={data.id} className='max-h-[408px]'>
                    <Link href={`/products/${data.id}`}>
                    <div className="w-full">
                        <Image src={data.image_url} alt="product" width={100} height={100}
                        className="w-full h-[210px] md:h-[280px] rounded-2xl"/>
                    </div>
                    </Link>
                    {/* product detail div */}
                    <div className='bg-white'>
                        <h1 className="text-base md:text-lg font-bold mt-3">{data.title}</h1>
                        <div className="flex items-center text-yellow-400"><div className="flex">{data.rating_star.map((star, index)=> (<span key={index}>{star}</span>))}</div> <p className="ml-1 text-xs md:text-sm text-gray-600">{data.rating}</p></div>
                        <p className="text-xl md:text-2xl font-bold mt-2">{data.price}<span className="text-gray-400 line-through ml-2">{data.old_price}</span></p>
                    </div>
                </div>
               )
            })
        }
      </div>
    </div>
  )
}

export default CategoryProducts
