import React from "react";

export default function ContactUsform() {
  return (
    <div className=" mx-20 w-full text-center">
      <h3> Contact Us</h3>
      <div className=" flex flex-col mt-28 justify-center place-items-center gap-5 w-full">
        <div className=" flex gap-5">
          <input
            type="text"
            placeholder="First Name"
            className=" border p-2 max-w-sm w-96 rounded-xl shadow-sm shadow-black "
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" border p-2 max-w-sm w-96   rounded-xl shadow-sm shadow-black "
          />
        </div>
        <div className=" flex gap-5">
          <input
            type="text"
            placeholder="Email"
            className=" border p-2 max-w-sm w-96 shadow-sm shadow-black rounded-xl"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className=" border p-2 max-w-sm w-96  rounded-xl shadow-sm shadow-black "
          />
        </div>
        <div className=" flex gap-5 w-[65%]">
          <textarea
            placeholder="Message"
            className=" border p-2 w-full rounded-xl shadow-sm shadow-black "
          />
        </div>
        <button className=" px-12 py-3  text-white rounded-full shadow-xl bg-slate-800 shadow-black">
          Send
        </button>
      </div>
    </div>
  );
}
