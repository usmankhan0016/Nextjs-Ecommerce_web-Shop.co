// import fonts
import { Playfair_Display,Cinzel,Prata,Montserrat } from "next/font/google"

const Playfair = Playfair_Display({subsets: ["latin"]})
const Cinze = Cinzel({subsets: ["latin"]})
const Prat = Prata({subsets: ["latin"],weight: "400"})
const Montserra = Montserrat({subsets: ["latin"]})


function BrandFonts() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full h-[145px] md:h-[122px] bg-black flex flex-wrap justify-center md:justify-between items-center space-x-5 md:px-24">
      <h1 className={`${Playfair.className} text-white text-xl sm:text-2xl md:text-3xl`}>VERSACE</h1>
      <h1 className={`${Cinze.className} text-white text-xl sm:text-2xl md:text-3xl`}>ZARA</h1>
      <h1 className={`${Montserra.className} text-white text-xl sm:text-2xl md:text-3xl`}>GUCCI</h1>
      <h1 className={`${Prat.className} text-white text-xl sm:text-2xl md:text-3xl`}>PRADA</h1>
      <h1 className={`${Montserra.className} text-white text-xl sm:text-2xl md:text-3xl`}>Calvin Klein</h1>
    </div>
  )
}

export default BrandFonts
