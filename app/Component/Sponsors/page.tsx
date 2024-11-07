import React from "react";
import Image from "next/image";
import sponsors from "@/public/images/sponsors.png"

export default function Sponsors(){
    return(
        <div className="w-[1922px] h-[538px] mt-[68px] pt-[140px] pb-[140px] pl-[220px] pr-[220px] gap-[100px] bg-white ">
        <div className="w-[1482px] h-[87px] flex flex-col justify-between items-center">
          <h1 className="font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-center text-[#212529] mb-6">
            Our sponsors
          </h1>
        </div>
        <div className="w-[1482px] h-[71px] mt-[100px]">
          <Image src={sponsors} alt="sponsors" />
        </div>
      </div>
    )
}