
import Image from "next/image";
import { FaStar ,FaStarHalf } from "react-icons/fa";
import TopSale from "./Sales";
import Link from "next/link";
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
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$120" ,
      image_url: "/product1.png"
    },
    {
      id: 2,
      title: "SKINNY FIT JEANS",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "3.5/5",
      price: "$240" ,
      image_url: "/product2.png",
      old_price: "$260"
    },
    {
      id: 3,
      title: "CHECKERED SHIRT",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$180" ,
      image_url: "/product3.png"
    },
    {
      id: 4,
      title: "SLEEVE STRIPED T-SHIRT",
      rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStarHalf key={5}/>],
      rating: "4.5/5",
      price: "$130" ,
      image_url: "/product4.png",
      old_price: "$160"
    }
];

function Products() {
  return (
    <div className="w-full bg-white max-w-screen-2xl mx-auto"> 
      <h1 className="text-[32px] lg:text-5xl font-extrabold text-center mt-14">NEW ARRIVALS</h1>
      {/* all products grid type ka div */}
      <div className="flex flex-col gap-7 md:flex-row justify-between items-center md:px-5 lg:px-24 mt-7 lg:mt-12">
        {
            products.map((data,index)=> {
               return(
                // main product div
                <div className="w-[200px] md:w-[280px]"key={data.id}>
                    <Link href={`/products/${data.id}`}>
                    <div className="w-full">
                        <Image src={data.image_url} alt="product" width={100} height={100}
                        className="w-full h-[210px] md:h-[280px] rounded-2xl"/>
                    </div>
                    </Link>
                    {/* product detail div */}
                    <div>
                        <h1 className="text-base md:text-lg font-bold mt-3">{data.title}</h1>
                        <div className="flex items-center text-yellow-400"><div className="flex">{data.rating_star.map((star, index)=> (<span key={index}>{star}</span>))}</div> <p className="ml-1 text-xs md:text-sm text-gray-600">{data.rating}</p></div>
                        <p className="text-xl md:text-2xl font-bold mt-2">{data.price}<span className="text-gray-400 line-through ml-2">{data.old_price}</span></p>
                    </div>
                </div>
               )
            })
        }
      </div>
      {/* Wrapper div to centre the button */}
      <div className="text-center px-10">
        <Link href={"/category"}>
          <button className="w-full md:w-52 h-12 rounded-[62px] border-[1px] border-gray-300 text-sm md:text-base font-[500] mt-10">View All</button>
        </Link>
      </div>
      {/* Divider line div */}
      <div className="px-4 sm:px-7 lg:px-[100px] mt-14 mb-20">
        <div className="w-full h-[2px] bg-gray-300"></div>
      </div>
      <TopSale/>
    </div>
  )
}

export default Products
