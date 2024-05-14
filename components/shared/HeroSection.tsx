import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className=" relative overflow-hidden z-0 flex flex-col w-full  place-items-center bg-blue-100">
      <div className=" w-full justify-center flex flex-col place-items-center">
        <Image
          src="/assets/svgs/Wave.svg"
          alt="wave"
          width={700}
          height="40"
          className=" w-full  -mt-12 "
        />

        <h2 className=" text-4xl mt-16 text-center font-medium max-md:text-3xl w-[80%]">
          We&apos;are ERN<span className=" text-yellow-400">X</span>:Empowering
          Parents , Inspiring Children, and Rewarding Excellence!
        </h2>
        <div className=" mt-16 relative aspect-video lg:w-[90%] max-md:hidden xl:w-[80%] h-96 rounded-xl">
          <Image
            src="/assets/images/hero/Main.png"
            alt="wave"
            fill
            className="  "
          />
        </div>
        <div className=" mt-16 relative h-96 w-[90%]">
          <Image
            src="/assets/images/hero/Main2.png"
            alt="wave"
            fill
            className="  "
          />
        </div>
      </div>
      <h2>Our Story</h2>
      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem
        eos necessitatibus quia ullam dolorum, atque omnis autem nam molestias
        doloribus deleniti quos non quasi cupiditate recusandae, et ipsum
        officia!
      </p>
      <br />
      <br />
      <p className=" text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore iusto
        excepturi quam voluptates aliquid natus incidunt vero ipsam temporibus
        quisquam. Dignissimos blanditiis magni, accusamus veritatis repellendus
        iure. Libero, dicta debitis?
      </p>
    </section>
  );
}
