"use client";
import React from "react";
import Image from "next/image";

import { useStateContext } from "../context/StateContextProvider";

const SecCard = ({ web }) => {
  const {
    setIsOpen,
    isOpen,
    detailimages,
    setDetailImages,
    setPermalink,
    setWeblink,
  } = useStateContext();

  const details = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setDetailImages([]);
      setPermalink("");
      setWeblink("");
    } else {
      setDetailImages(web.details);
      setPermalink(web.permalink);
      setWeblink(web.Github);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="lg:w-[340px] border-[1px] dark:border-gray-700 dark:bg-gray-900 border-gray-100 text-gray-700 w-full rounded-2xl shadow-md box-border relative block h-[430px] cursor-pointer"
      //   href=""
      onClick={() => details()}
    >
      <div className="h-[250px] w-full p-3 relative flex ">
        <Image
          alt={web.alt}
          className=" object-cover rounded-2xl w-[full] h-[full] object-top transition-all duration-[3s] hover:object-bottom"
          src={web.imageUrl}
        />
      </div>

      <div className="px-3 ">
        <p className="font-interV font-semibold dark:text-white text-[17px] text-gray-600 ">
          {web.title}
        </p>
        <p className="font-interV dark:text-gray-300 text-gray-500 text-[.8rem] h-10 overflow-hidden text-ellipsis">
          {web.Desc}
        </p>
      </div>
      <div className="p-3 font-Bricolage text-xs">
        <div className="pb-2 gap-x-1 flex  ">
          {web.Tools?.map((tool, i) => (
            <span
              key={i}
              className="py-1 rounded-full text-[9px] px-3 text-primary dark:text-gray-300 bg-bgExlight dark:bg-gray-700"
            >
              {tool}
            </span>
          ))}
          <span className="py-1 rounded-full px-3 text-[9px] bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            +{web.More} more
          </span>
        </div>
        <div className="pb-2 gap-1  flex ">
          {web.HashTag?.map((tag, i) => (
            <span
              key={i}
              className="py-1 rounded-full px-3 text-[10px] dark:text-gray-300 dark:bg-gray-800  bg-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="">
          <span className="font-bold py-[6px] px-3 inline-flex text-white justify-center items-center  bg-gray-700 rounded-md prounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              className="mr-2"
            >
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
            Live Demo
          </span>
        </a>
      </div>
    </div>
  );
};

export default SecCard;
