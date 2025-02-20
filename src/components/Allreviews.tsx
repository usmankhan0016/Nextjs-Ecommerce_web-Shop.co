import React from 'react'
import { FaStar} from 'react-icons/fa6'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { SelectDemo } from './LatestButton'



interface Irviews{
   id: number
   rating_star: any[]
   userName: string
   user_review: string
   date: string
}

const reviews:Irviews[] = [
   {
    id: 1,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "Sarah M.",
    user_review:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    date: "Posted on August 14,2023"
   },
   {
    id: 2,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "John D.",
    user_review:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    date: "Posted on August 14,2023"
   },
   {
    id: 3,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "Emma L.",
    user_review:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "Posted on August 14,2023"
   },
   {
    id: 4,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "Michael B.",
    user_review:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "Posted on August 14,2023"
   },
   {
    id: 5,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "Sophia K.",
    user_review:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "Posted on August 14,2023"
   },
   {
    id: 6,
   rating_star: [<FaStar key={1}/>,<FaStar key={2}/>,<FaStar key={3}/>,<FaStar key={4}/>,<FaStar key={5}/>],
    userName: "Lana kendrick",
    user_review:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "Posted on August 14,2023"
   },
]

function Allreviews() {
  return (
     <main className='max-w-screen-2xl mx-auto'>
         {/* Top div */}
         <div className='flex justify-between items-center my-7 px-4 sm:px-8 md:px-16'>
            {/* Heading div */}
            <div className='flex items-center gap-1'>
              <h1 className='text-xl md:text-2xl font-bold'>All Reviews</h1>
              <p className='text-sm md:text-base text-[#00000099]'>(451)</p>
            </div>
             {/* Icon and buttons div */}
            <div className='flex items-center gap-1 sm:gap-3'>
               <div className='w-10 h-10 md:w-12 md:h-12 rounded-[62px] flex justify-center items-center bg-[#F0F0F0]'><Image className='w-5 h-5 md:w-6 md:h-6' src={"/filter-icon.png"} alt='icon' width={24} height={24}/></div>   
               <span className='hidden md:block'><SelectDemo/></span>
               <button className='w-[130px] h-10 md:w-[150px] md:h-12 rounded-[62px] bg-black text-white text-sm md:text-base font-[500]'>Wrtie a Review</button>
               </div> 
            </div>
         {/* Bottom Review div */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-16'>
            {
             reviews.map((item,)=> {
               return(
                  // Main card div
                  <div className='border border-[#0000001A] rounded-[20px] p-7' key={item.id}>
                     <span className='flex text-yellow-400'>{item.rating_star.map((e, index)=>(<span key={index}>{e}</span>))}</span>
                     <h1 className='flex text-base sm:text-xl font-bold gap-1 mt-2 items-center'>{item.userName}<Check className="bg-[#01AB31] text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 p-[2px]"/></h1>
                     <p className='text-sm md:text-base text-[#00000099] mt-3'>{item.user_review}</p>
                     <p className='text-sm sm:text-base text-[#00000099] mt-5'>{item.date}</p>
                  </div>

               )
             })  
            }
         </div>  
         {/* Button */}
         <div className='text-center mt-7'>
            <button className='w-[200px] h-[52px] rounded-[62px] border border-[#0000001A] text-sm md:text-base font-[500] hover:text-[#00000099]'>Load More Reviews</button>
         </div>

     </main>
  )
}

export default Allreviews
