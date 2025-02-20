"use client"

import { Checkbox } from "@/components/ui/checkbox"


let checkBoxColors:string[] =[
    "bg-[#00C12B]",
    "bg-[#F50606]",
    "bg-[#F5DD06]",
    "bg-[#F57906]",
    "bg-[#06CAF5]",
    "bg-[#063AF5]",
    "bg-[#7D06F5]",
    "bg-[#F506A4]",
    "bg-[#FFFFFF]",
    "bg-black"
];



export function CheckboxDemo() {
  return (
    <main className="flex flex-wrap gap-3 items-center ">
       {
        checkBoxColors.map((colors,index)=>(
           <div key={index}>
              <Checkbox id="terms" className={`w-[37px] h-[37px] border-2 border-[#00000033] ${colors} rounded-full`} />
           </div>
        ))
       }     
    </main>
  )
}
