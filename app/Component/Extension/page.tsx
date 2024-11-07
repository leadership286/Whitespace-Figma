import React from "react";
import Image from "next/image";
import contain from "@/public/images/Image-container.png";

export default function Extension(){
    return(
        
 <div className="w-[1920px] h-[829px] mt-[68px] left-[1px] px-[220px] py-[140px] bg-[#043873] text-white flex justify-between items-center">
 <div className="w-[656px] flex flex-col gap-4">
   <h2 className="w-[656px] h-[154px] font-inter text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] text-left">
     Use as Extension
   </h2>
   <div className="w-[656px] h-[60px] bg-[#043873] text-white mt-4">
     <p className="font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
     Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
     </p>
   </div>
   <div className="w-[201px] h-[63px] gap-[60px] mt-4">
  <button className="flex items-center justify-center px-[40px] py-[20px] gap-[10px] rounded-tl-[6px] bg-[#4F9CF9] text-white font-inter transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,249,0.6)]">
    Get Started
    <span className="ml-2 w-[7px] h-[14px]">&#8594;</span>
  </button>
</div>

 </div>
 <div className="w-[824px] h-[549px] ml-10">
   <Image src={contain} alt="container" className="w-full h-full object-contain  transition-transform duration-300 ease-in-out hover:scale-110" />
 </div>
</div>
    )
}