import Image from "next/image";
import React from "react";

export default function AboutCompany() {
  return (
    <section className=" flex flex-col w-full lg:gap-56 gap-36 my-28 justify-center place-items-center">
      <div className=" flex w-full place-items-center flex-col gap-7 mx-auto">
        <Image
          src="/assets/images/about/OurSolution.png"
          alt="Our Solution"
          height={60}
          width={190}
          className=" object-contain"
        />
        <div className=" w-full  flex  justify-center relative  ">
          <Image
            src="/assets/svgs/BirdWind.svg"
            alt="BirdWind"
            height={200}
            width={300}
            className=" rotate-180 z-0 -top-[40%] right-0 w-[27%]  absolute rounded-xl "
          />

          <Image
            src="/assets/images/about/youtubeThumb.png"
            alt="youtube thumbnail"
            height={1000}
            width={1200}
            className=" self-center z-10  rounded-xl w-[80%]  aspect-video"
          />

          <Image
            src="/assets/svgs/BirdWind.svg"
            alt=" BirdWind"
            height={200}
            width={300}
            className="  left-0 -bottom-[40%]   w-[27%]  absolute rounded-xl "
          />
        </div>
      </div>

      <div className=" flex  place-items-center flex-col gap-10  mx-auto">
        <Image
          src="/assets/images/about/OurMission.png"
          alt="Our Mission"
          height={60}
          width={190}
          className=" object-contain"
        />
        <div className=" flex max-lg:flex-col gap-16 px-10 justify-evenly place-items-center">
          <div className=" flex flex-col gap-5 lg:w-[40%]  ">
            <h3 className="  text-3xl max-lg:text-center font-semibold">
              We have aligned our core belife and motivation to improve
              childer&apos;s devlopment and education
            </h3>
            <div className=" flex flex-col gap-4">
              <div className=" flex gap-4  place-items-center ">
                <Image
                  src="/assets/svgs/Icons/Trophi.svg"
                  alt="Trophie"
                  height={35}
                  width={35}
                />

                <p className=" font-light">
                  Create champions by incentivizing them with things they care
                  about
                </p>
              </div>
              <div className=" flex gap-4 place-items-center  ">
                <Image
                  src="/assets/svgs/Icons/StudentCap.svg"
                  alt="StudentCap"
                  height={35}
                  width={35}
                />
                <p className=" font-light">
                  To improve the way we raise children through accountability,
                  drive, and education
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/assets/images/about/mission.png"
            alt="Trophie"
            height={500}
            width={500}
            className=" h-72 aspect-video  rounded-lg "
          />
        </div>
      </div>
      <div className=" flex  place-items-center relative pb-10 flex-col w-full gap-7 ">
        <Image
          src="/assets/images/about/OurValues.png"
          alt="Our Mission"
          height={60}
          width={190}
          className=" object-contain"
        />
        <Image
          src="/assets/svgs/Kurkure.svg"
          alt="Kurkure"
          height={200}
          width={200}
          className=" absolute max-lg:hidden -top-[40%] right-0 object-contain"
        />
        <Image
          src="/assets/svgs/Kurkure.svg"
          alt="Kurkure"
          height={200}
          width={200}
          className=" absolute max-lg:hidden -bottom-[40%] left-0 scale-x-[-1] object-contain"
        />

        <div className=" flex max-lg:flex-col-reverse gap-10 w-full max-lg:px-7 justify-evenly place-items-center ">
          <Image
            src="/assets/images/about/values.png"
            alt="values"
            height={500}
            width={500}
            className=" lg:h-80 h-72 lg:w-[40%] md:min-w-96 max-lg:w-full aspect-video  rounded-lg "
          />

          <div className=" flex flex-col gap-5 lg:w-[40%]  ">
            <div className=" flex flex-col gap-5">
              <div className=" flex gap-4 place-items-start">
                <Image
                  src="/assets/svgs/Icons/Res.svg"
                  alt="Responsible icon"
                  height={36}
                  width={36}
                />

                <div>
                  <h4 className=" font-semibold text-lg">Be Responsible</h4>
                  <p>
                    Get rid of noisy and polluting throw-away toys. Give your
                    kids something they are passionate about.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 place-items-start">
                <Image
                  src="/assets/svgs/Icons/Motivate.svg"
                  alt="Motivate icon"
                  height={36}
                  width={36}
                />

                <div>
                  <h4 className=" font-semibold text-lg">Motivate</h4>

                  <p>
                    Motivate your kids with something they truly care about.
                    Choose from many e-vouchers and in-game currencies.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 place-items-start">
                <Image
                  src="/assets/svgs/Icons/Learn.svg"
                  alt="Learn icon"
                  height={36}
                  width={36}
                />
                <div>
                  <h4 className=" font-semibold text-lg">Learn-through-play</h4>

                  <p>
                    Empower your child to earn their due and teach the valuable
                    life lessons
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 place-content-start">
                <Image
                  src="/assets/svgs/Icons/Healthy.svg"
                  alt="Healthy icon"
                  height={36}
                  width={36}
                />
                <div>
                  <h4 className=" font-semibold text-lg">Be Healthy</h4>
                  <p>
                    Keep your child healthy with regular brushing and flossing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
