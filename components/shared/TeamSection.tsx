import Image from "next/image";
import React from "react";

export default function TeamSection() {
  return (
    <section className=" relative flex flex-col place-items-center  w-full">
      <Image
        src="/assets/svgs/IndigoWave.svg"
        alt="wave"
        width={700}
        height="1000"
        className=" w-full z-10 absolute -top-14 "
      />
      <Image
        src="/assets/images/team/bg.png"
        alt="wave"
        width={700}
        height="1000"
        className=" w-full z-0 absolute h-[670px] max-md:h-[1950px]  "
      />
      <div className=" w-full flex flex-col pt-20 place-items-center">
        <h3 className=" text-3xl flex gap-1 font-normal text-center">
          Say Hello To Our{" "}
          <Image
            src="/assets/svgs/Team.svg"
            alt="Team"
            height={60}
            width={90}
          />
        </h3>
        <p className=" text-center leading-10 text-lg font-light text-[#313C58B2]">
          Our team has extensive industry and business experience
        </p>
      </div>
      <div className=" flex max-lg:flex-col max-lg:place-items-center justify-evenly w-full  max-lg:gap-28 py-14">
        <div className=" flex flex-col gap-5 max-sm:place-items-center max-lg:px-10 lg:max-w-72  lg:min-w-[25%] ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-56 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/drAnas.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-sm font-semibold">Dr. Anas Hakimeh</h5>
            <p className=" font-light">Co-Founder & CEO, Paediatric Dentist</p>
            <div className=" flex gap-3 place-items-center">
              <Image
                src="/assets/svgs/icons/Linkdin.svg"
                height={17}
                width={17}
                alt="linkedIn"
              />
              <p className=" font-extralight text-sm">LinkdIn</p>
            </div>
          </div>
          <p className=" text-justify text-[#313C58] text-sm">
            Anas is a pediatric dentist and entrepreneur based in Austin, Texas.
            Graduated dentistry from Charité Berlin in 2009, and completed his
            postgraduate in pediatric dentistry at Rutgers university in 2017.
            Anas believes that education for children is a key cornerstone to
            build a strong future generation that will translate into a brighter
            future for society as a whole.
          </p>
        </div>
        <div className=" flex flex-col gap-5 max-sm:place-items-center max-lg:px-10 lg:max-w-72  lg:min-w-[25%] ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-56 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/vincent.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-base font-semibold">Vincent Bühler</h5>
            <p className=" font-light">Co-Founder</p>
            <div className=" flex gap-3 place-items-center">
              <Image
                src="/assets/svgs/icons/Linkdin.svg"
                height={17}
                width={17}
                alt="linkedIn"
              />
              <p className=" font-extralight text-sm">LinkdIn</p>
            </div>
          </div>
          <p className=" text-justify text-[#313C58] text-sm">
            Vincent is a co-founder of ERNX and heads the operational aspects of
            the company. In his twenties, he gained valuable experience working
            in multiple companies in three different countries. His journey
            began with an internship at IBM, and he later held positions in
            project management and financial analysis at various funds. Since
            2020, Vincent has been actively involved in the tech start-up scene.
          </p>
        </div>
        <div className=" flex flex-col gap-5 max-sm:place-items-center max-lg:px-10 lg:max-w-72  lg:min-w-[25%] ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-56 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/michale.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-base font-semibold">Michael Abboud</h5>
            <p className=" font-light">Co-Founder</p>
            <div className=" flex gap-3 place-items-center">
              <Image
                src="/assets/svgs/icons/Linkdin.svg"
                height={17}
                width={17}
                alt="linkedIn"
              />
              <p className=" font-extralight text-sm">LinkdIn</p>
            </div>
          </div>
          <p className=" text-justify text-[#313C58] text-sm">
            Michael is a co-founder of ERNX and seasoned entrepreneur with a
            keen interest in technology startups. Holding a degree in Economics
            and Management from Montreal, Canada, Michael brings over 15 years
            of invaluable experience in managing small and medium-sized
            enterprises (SMEs). Transitioning to the role of a Business
            Transformation Expert and Web 3.0 Specialist, Michael has
            prioritized client relationship management, cultivating long-term
            partnerships that fuel business expansion and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
