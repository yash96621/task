import { CodeXmlIcon, Heart, Mail, PuzzleIcon, User2 } from "lucide-react";
import React from "react";

export default function AboutCompany() {
  return (
    <section className=" flex flex-col w-full gap-56 justify-center place-items-center">
      <div className=" flex w-full place-items-center flex-col gap-7 mx-auto">
        <h2 className=" text-2xl font-bold">Our Solution</h2>
        <div className=" w-[80%]  aspect-video bg-slate-900 rounded-xl " />
      </div>

      <div className=" flex  place-items-center flex-col gap-7 mx-auto">
        <h2 className=" text-2xl font-bold">Our Misson</h2>
        <div className=" flex justify-evenly place-items-center">
          <div className=" flex flex-col gap-5 w-[40%] ">
            <h3 className="  text-3xl font-semibold">
              We have aligned our core belife and motivation to improve
              childer&apos;s devlopment and education
            </h3>
            <div className=" flex flex-col gap-4">
              <div className=" flex gap-4  place-items-center ">
                <div className="bg-yellow-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <Heart className="  text-white " />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing elit.
                </p>
              </div>
              <div className=" flex gap-4 place-items-center  ">
                <div className=" bg-purple-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <User2 className="  text-white " />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  consectetur adipisicing elit consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className=" h-64 aspect-video rounded-lg bg-slate-800 shadow-2xl shadow-black" />
        </div>
      </div>
      <div className=" flex  place-items-center  flex-col gap-7 mx-auto">
        <h2 className=" text-2xl font-bold">Our Values</h2>
        <div className=" flex justify-evenly place-items-center">
          <div className=" h-80 aspect-video rounded-lg bg-slate-800" />
          <div className=" flex flex-col gap-5 w-[40%] ">
            <div className=" flex flex-col gap-5">
              <div className=" flex gap-4 place-items-center">
                <div className=" bg-yellow-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <CodeXmlIcon className="  text-white " />
                </div>

                <div>
                  <h4 className=" font-semibold text-lg">About</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt beatae ea Nesciunt beatae ea
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 place-items-center">
                <div className=" bg-blue-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <User2 className="  text-white " />
                </div>

                <div>
                  <h4 className=" font-semibold text-lg">Users</h4>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt beatae ea Nesciunt beatae ea
                  </p>
                </div>
              </div>
              <div className=" flex gap-4   place-items-center">
                <div className=" bg-red-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <Mail className="  text-white " />
                </div>

                <div>
                  <h4 className=" font-semibold text-lg">Mail</h4>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt beatae ea Nesciunt beatae ea
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 place-items-center">
                <div className=" bg-green-500 p-2 h-fit  rounded-xl shadow-2xl  shadow-black">
                  <PuzzleIcon className="  text-white " />
                </div>

                <div>
                  <h4 className=" font-semibold text-lg">Benefits</h4>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt beatae ea
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
