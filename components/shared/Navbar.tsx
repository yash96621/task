import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" relative  w-full z-20 ">
      <Image
        src="/assets/svgs/Wave.svg"
        alt="wave"
        width={1000}
        height="50"
        className=" w-full top-4   absolute -z-10  max-md:hidden "
      />
      <Image
        src="/assets/svgs/Wave2.svg"
        alt="wave"
        width={700}
        height="40"
        className=" w-full -z-10  absolute  md:hidden max-sm:top-3 sm:-top-8 "
      />
      <div className=" relative flex justify-between w-full z-20 lg:px-16 max-lg:px-5  py-3 place-items-center bg-gray-50">
        <Image src="/assets/svgs/Logo.svg" width="80" height="40" alt="logo" />

        <ul className=" flex gap-7 text-sm font-medium place-items-center max-lg:hidden">
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
      </div>
    </nav>
  );
}
