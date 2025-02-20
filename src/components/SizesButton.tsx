import React from 'react'
// Shirt sizes
const shirtSizes:string[]=[
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
];

function SizesButton() {
  return (
     <main className='flex flex-wrap gap-3'>
        {
            shirtSizes.map((size,index)=>(
                <div key={index}>
                  <button className='w-[90px] h-[39px] rounded-[62px] text-base text-[#00000099] active:text-white bg-[#F0F0F0] active:bg-black  flex justify-center items-center p-2'>{size}</button>
                </div>
            ))
        }
     </main>
  )
}

export default SizesButton
