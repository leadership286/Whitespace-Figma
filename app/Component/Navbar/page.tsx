import React from "react";
import Image from "next/image";
import logo from "@/public/images/Logo.png"

export default function Navbar(){
    return(
<div>
<header className="w-[1920px] h-[92px] left-[1px] px-[220px] py-4 gap-0 flex justify-between items-center bg-[#043873]  ">
<div className="w-[191px] h-[34px]">
    <Image src={logo} alt="logo"/>
</div>
<div className="w-[737.5px] h-[60px] gap-[60px] flex flex-row justify-between items-center">
    <ul className="w-[549px] h-[23px] gap-8 text-white bg-[#043873] flex flex-row justify-between items-center ">
        <li  className="font-dm-sans text-[18px] font-medium leading-[23px] text-left">Products</li>
        <li  className="font-dm-sans text-[18px] font-medium leading-[23px] text-left">Solutions</li>
        <li  className="font-dm-sans text-[18px] font-medium leading-[23px] text-left">Resources</li>
        <li  className="font-dm-sans text-[18px] font-medium leading-[23px] text-left">Pricing</li>
    </ul>
    <button className="w-[126px] h-[60px] bg-[#FFE492] text-[#043873] rounded-lg pt-4 pr-10 pb-4 pl-10 font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left transition-all duration-400 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(255,228,146,0.6)]">
    Login
</button>

</div>
</header>



</div>
    )
}
