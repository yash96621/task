import Image from "next/image";
import React from "react";

export default function TeamSection() {
  return (
    <section className=" flex flex-col place-items-center  w-full">
      <div>
        <h3 className=" text-3xl font-semibold text-center">
          Say Hello To Our Team
        </h3>
        <p className=" text-center leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit
          delectus
        </p>
      </div>
      <div className=" flex-wrap flex justify-evenly w-full gap-10 max-sm:gap-16 py-14">
        <div className=" flex flex-col gap-5 max-sm:place-items-center sm:max-w-60  ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-44 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/steavjobs.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-base font-semibold">Steav jobs</h5>
            <p>Apple</p>
            <p>Software engineer</p>
          </div>
          <p className=" text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            sapiente? Eligendi ipsum sint esse incidunt odit doloremque nostrum,
            atque eius ullam distinctio rerum saepe dolor, blanditiis quam? Est,
            rem sunt.
          </p>
        </div>
        <div className=" flex flex-col gap-5 max-sm:place-items-center sm:max-w-60 ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-44 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/steavjobs.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-base font-semibold">Steav jobs</h5>
            <p>Apple</p>
            <p>Software engineer</p>
          </div>
          <p className=" text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            sapiente? Eligendi ipsum sint esse incidunt odit doloremque nostrum,
            atque eius ullam distinctio rerum saepe dolor, blanditiis quam? Est,
            rem sunt.
          </p>
        </div>
        <div className=" flex flex-col gap-5 max-sm:place-items-center sm:max-w-60 ">
          <div className=" pr-2 pb-2 relative w-fit  bg-purple-500 rounded-2xl">
            <div className=" aspect-square size-44 rounded-2xl overflow-hidden   relative ">
              <Image
                src="/assets/images/team/steavjobs.png"
                fill
                alt="employee photo"
              />
            </div>
          </div>
          <div className=" max-sm:text-center">
            <h5 className=" text-base font-semibold">Steav jobs</h5>
            <p>Apple</p>
            <p>Software engineer</p>
          </div>
          <p className=" text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            sapiente? Eligendi ipsum sint esse incidunt odit doloremque nostrum,
            atque eius ullam distinctio rerum saepe dolor, blanditiis quam? Est,
            rem sunt.
          </p>
        </div>
      </div>
    </section>
  );
}
