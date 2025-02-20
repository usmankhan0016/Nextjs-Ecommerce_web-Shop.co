import React from "react";
import { TfiEmail } from "react-icons/tfi";

function LatestOffer() {
  return (
    <main className="w-full flex justify-center mt-16 max-w-screen-2xl mx-auto">
      {/* Outer div */}
      <div className="w-[90%] md:w-[80%] h-full lg:h-[180px] bg-black rounded-[20px] flex flex-col gap-y-5 lg:flex-row p-5 lg:p-10">
        {/* heading div */}
        <div>
          <h1 className="text-white text-[32px] md:text-[40px] font-extrabold leading-[45px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>
        {/* Inputs div */}
        <div className="space-y-3">
          <div className="w-full lg:w-[345px] h-12 flex items-center gap-3 rounded-[62px] py-3 px-4 bg-[#F0F0F0]">
            <TfiEmail className="text-[#00000066]" size={20}/>
            <input
              className="w-full h-full bg-transparent outline-none text-sm placeholder:text-base"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="w-full lg:w-[345px] h-12 flex justify-center items-center rounded-[62px] py-3 px-4 bg-[#F0F0F0]">
            <p className="text-sm sm:text-base font-[500] cursor-pointer">
              Subscribe to Newsletter
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LatestOffer;
