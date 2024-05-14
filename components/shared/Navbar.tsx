import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex justify-between w-full z-20 lg:px-16  py-2 place-items-center">
      <Image src="/assets/svgs/Logo.svg" width="90" height="40" alt="logo" />

      <ul className=" flex gap-7 text-sm font-medium place-items-center">
        <li>Rewards</li>
        <li>
          Brands on ERN <span className=" text-yellow-500">X</span>
        </li>
        <li>News</li>
        <li className=" text-yellow-400"> About Us</li>
        <li>Become a Partner</li>
        <button className=" bg-slate-800 place-items-center text-white flex gap-3 shadow-sm shadow-black px-7 py-2 rounded-full ">
          Get The App <ArrowRight />
        </button>
      </ul>
    </nav>
  );
}
