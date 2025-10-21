"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/public/constant";
import { useState } from "react";
import { useStateContext } from "../context/StateContextProvider";

const Cards = ({ web }) => {
  const { setIsOpen, isOpen, detailimages, setDetailImages } =
    useStateContext();
  const details = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setDetailImages([]);
    } else {
      setDetailImages(web.details);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      //   key={index}
      className="w-[240px] shadow-md box-border relative block h-[330px] cursor-pointer"
      //   href=""
      onClick={() => details()}
    >
      <div className="h-[85%] relative flex ">
        <Image
          // className="webtemplate"
          alt={web.alt}
          className=" object-cover w-[full] h-[full] object-top transition-all duration-[3s] hover:object-bottom"
          src={web.imageUrl}
        />
      </div>
      <div className="h-[15%] py-[.9rem] px-[.1rem] bg-white">
        <p className="text-center">{web.title}</p>
      </div>
    </div>
  );
};

export default Cards;
