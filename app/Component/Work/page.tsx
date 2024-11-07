import React from "react"
import Image from "next/image"
import work from "@/public/images/work-image.png"

export default function Work(){
    return(
        <div className="w-[1920px] h-[1588px] mt-[68px] l-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex justify-between items-center ">
<div className="w-[710px] h-[661px]">
  <Image src={work} alt="eclipes" 
  className=" transition-transform duration-300 ease-in-out hover:scale-110"/>
</div>
<div className="w-[670px] h-[294px] gap-[60px] flex flex-col ">
  <h1 className="font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left">
    Work Together
  </h1>
  <p className="w-[670px] h-[60px] font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left gap-6">
    With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
  </p>
  <div className="w-[186px] h-[63px]  p-[20px_40px] gap-[10px] rounded-tl-[6px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#4F9CF9]">
  <button className="font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left text-white transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,249,0.6)]">
  Try it now
  <span className="ml-2 w-[7px] h-[14px]">&#8594;</span>
</button>
  </div>
</div>
</div>
    )
}



