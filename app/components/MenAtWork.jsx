import React from "react";
import { images } from "../../public/constant";

const MenAtWork = () => {
  return (
    <div className="w-full">
      <img src={images.work} className="h-fit object-contain w-fit" alt="" />
    </div>
  );
};

export default MenAtWork;
