import React from "react";
import Image from "next/image";
import contain from "@/public/images/Image-container.png";

export default function Customise(){
    return(
        <div className="w-[1921px] h-[812.09px] mt-[68px] ml-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex justify-between items-center  ">
        <div className="w-[714px] h-[532.09px] gap-[4px]">
          <Image src={contain} alt="container"
          className=" transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
        <div className="w-[669px] h-[411px] gap-[24px] flex flex-col ">
          <h1 className="font-inter text-6xl font-bold leading-[87.14px] tracking-[-0.02em] text-left text-[#212529]">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] text-[#212529] font-inter text-base font-normal leading-8 tracking-[-0.02em] text-left gap-6">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <div className="w-[171px] h-[63px] p-[20px_40px] gap-[10px] rounded-[8px_0_0_0] rounded-tl-[6px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#4F9CF9]">
  <button className="font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left text-white  bg-[#4F9CF9] transition-all duration-500 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,249,0.6)]">
    Let's Go
    <span className="ml-2 w-[7px] h-[14px]">&#8594;</span>
  </button>
</div>

        </div>
       </div>
    )
}