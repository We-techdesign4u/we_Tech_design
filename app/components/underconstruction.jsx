import React from "react";
import { images } from "@/public/constant";
import Image from "next/image";

const Underconstruction = () => {
  return (
    <div className="absolute top-[55%] z-2">
      <div className="opacity-20 w-screen bg-black h-4">
        <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
      </div>
      <div className=" opacity-20 mt-15 w-screen bg-black h-4">
        <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
      </div>
      <div className="w-full -top-12 absolute flex z-1 justify-center items-center">
        <div className="justify-center relative flex items-center">
          <Image className="w-40" alt="bg" src={images.plate} />
          <div className="absolute z-5">
            <p className="text-center font-bold text-2xl">UNDER</p>
            <p className="text-center"> CONSTRUCTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underconstruction;
