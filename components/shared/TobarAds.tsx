import Image from "next/image";
import React from "react";

export default function TobarAds() {
  return (
    <div className=" w-full bg-blue-200 px-10 gap-3 py-3 flex justify-center place-items-center">
      <Image src="/assets/svgs/X.svg" width="20" height="20" alt="X" />
      <p className=" text-sm font-medium text-slate-700">
        Invite another parent to <span className=" text-blue-600">ERNX</span>{" "}
        and earn abcdef reward!
      </p>
      <Image src="/assets/svgs/X.svg" width="20" height="20" alt="X" />
    </div>
  );
}
