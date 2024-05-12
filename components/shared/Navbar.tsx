import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex justify-between w-full px-6 py-2 place-items-center">
      <h3 className="  text-3xl font-bold">CRN</h3>
      <ul className=" flex gap-7 font-medium place-items-center">
        <li>Home</li>
        <li>About Us</li>
        <li>Store</li>
        <li> Subscription</li>
        <button className=" bg-slate-800 text-white px-7 py-2 rounded-full shadow-2xl">
          Login
        </button>
      </ul>
    </nav>
  );
}
