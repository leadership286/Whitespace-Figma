import React from "react";
import Image from "next/image";
import contain from "@/public/images/Image-container.png";

export default function Project(){
    return(
        <div className="w-[1920px] h-[1588px]  mt-[6px] ml-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex justify-between items-center">
      
        <div className="w-[672px] h-[411px] gap-4 flex flex-col">
          <h1 className="w-full font-inter text-[72px] font-extrabold leading-[87.14px] tracking-[-0.02em] text-left text-[#212529]">
            Project Management
          </h1>
          <p className="w-full font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left  text-[#212529]">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <div className="w-[219px] h-[63px] bg-[#4F9CF9] text-white mt-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,259,0.6)]">
    <button className="font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-center p-5 gap-[10px] w-full h-full">
        Get Started
        <span className="ml-0.5">&#8594;</span>
    </button>
</div>

        </div>
        <div className="w-[748px] h-[547px]">
          <Image src={contain} alt="container" className=" w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </div>
    )
}