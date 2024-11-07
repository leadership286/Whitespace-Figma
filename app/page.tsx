import React from "react";
import Image from "next/image";
import contain from "@/public/images/Image-container.png";

export default function Container() {
  return (
    <div className="">
    <div className="w-[1920px] h-[829px] top-[92px] left-[1px] px-[220px] py-[140px] bg-[#043873] text-white flex justify-between items-center">
      <div className="w-[656px] flex flex-col gap-4">
        <h2 className="w-[656px] h-[154px] font-inter text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] text-left">
          Get More Done with whitespace
        </h2>
        <div className="w-[656px] h-[60px] bg-[#043873] text-white mt-4">
          <p className="font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="w-[219px] h-[63px] bg-[#4F9CF9] text-white mt-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,249,0.6)]">
    <button className="font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left p-5 gap-[10px] w-full h-full">
        Try Whitespace free
        <span className="ml-0.5">&#8594;</span>
    </button>
</div>

      </div>
      <div className="w-[824px] h-[549px] ml-10">
        <Image src={contain} alt="container" className="w-full h-full object-contain  transition-transform duration-300 ease-in-out hover:scale-110" />
      </div>
    </div>
    </div>
  )
}