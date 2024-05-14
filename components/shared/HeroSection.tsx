import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className=" relative overflow-hidden  flex flex-col w-full  place-items-center ">
      <div className="  w-full z-0 relative h-[710px] max-md:h-[800px]   flex flex-col place-items-center ">
        <Image
          src="/assets/images/hero/DownWave.png"
          alt="wave"
          width={700}
          height="1000"
          className=" w-full z-0 absolute h-[730px] max-md:h-[850px]  "
        />

        <Image
          src="/assets/svgs/SideCircle.svg"
          alt="SideCircle"
          width={300}
          height={300}
          className=" w-[207px] max-md:-top-[2%] max-md:opacity-50 z-10 absolute top-7 -left-10 h-[197px] max-md:h-[200px]  "
        />
        <Image
          src="/assets/svgs/SideCircle.svg"
          alt="SideCircle"
          width={300}
          height={300}
          className=" w-[120px] z-10 absolute -bottom-20 -rotate-90 left-[14%] h-[300px] max-md:h-[850px]  "
        />
        <Image
          src="/assets/svgs/Star.svg"
          alt="Star"
          width={300}
          height={300}
          className=" w-[160px] opacity-70 max-md:-top-[15%] z-10 absolute top-7 right-10 h-[197px] max-md:h-[850px]  "
        />

        <h2 className=" text-4xl mt-14 z-10 text-center font-medium max-md:text-3xl max-md:w-[87%] md:w-[80%]">
          We&apos;are ERN<span className=" text-yellow-400">X</span>:Empowering
          Parents , Inspiring Children, and Rewarding Excellence!
        </h2>
        <div className=" mt-16 relative z-30   md:w-[85%]  max-md:hidden xl:w-[80%] max-md:h-80 h-96 rounded-xl">
          <Image src="/assets/images/hero/Main.png" alt="Landing image" fill />
        </div>
        <div className=" mt-16 md:hidden z-30 relative h-[506px] sm:w-[70%] w-[90%]">
          <Image src="/assets/images/hero/Main2.png" alt="Landing image" fill />
        </div>
      </div>
      <div className=" w-full min-h-96  -z-10 place-items-center flex flex-col  text-center  relative">
        <Image
          src="/assets/images/hero/grid.png"
          alt="grid"
          height={100}
          width={2200}
          className=" opacity-70   absolute -z-10 "
        />
        <div className="z-10 relative mt-16 md:w-[70%] w-[80%] text-[#313C58B2] flex-col flex gap-10">
          <div className=" flex flex-col place-items-center gap-16 ">
            <Image
              src="/assets/images/hero/ourStory.png"
              alt="Our Story"
              height={50}
              width={160}
              className="   object-contain   "
            />
            <p className=" text-center">
              ERNX is a mobile incentive app crafted to{" "}
              <span className=" text-[#313C58] font-medium">
                empower parents in inspiring their children
              </span>{" "}
              , who can amass{" "}
              <span className=" text-[#313C58] font-medium">
                rewards redeemable
              </span>{" "}
              for their favourite{" "}
              <span className=" text-[#313C58] font-medium">
                digital vouchers
              </span>{" "}
              . Digital points can be obtained from{" "}
              <span className=" text-[#313C58] font-medium">
                visits to paediatric practices, schools and other businesses
              </span>{" "}
              and extra points purchased in our store.
            </p>
          </div>

          <p className=" text-center">
            This pioneering method not only supports parents, educational
            institutions, and child-centric businesses in{" "}
            <span className=" text-[#313C58] font-medium">
              behaviour management
            </span>{" "}
            but also instils in children the{" "}
            <span className=" text-[#313C58] font-medium">
              {" "}
              value of striving for excellence to unlock their most coveted
              rewards.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
