"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/public/constant";
import { useState } from "react";
import Cards from "../components/cards";
import { useStateContext } from "../context/StateContextProvider";
import {
  AiOutlineClose,
  AiOutlineSend,
  AiOutlineShareAlt,
  AiOutlineTool,
  AiTwotoneTool,
  AiOutlineHeart,
  AiOutlineBuild,
  AiOutlineWechatWork,
  AiOutlineUser,
  AiOutlineLink,
  AiOutlineGithub,
  AiOutlineGlobal,
  AiOutlineMobile,
  AiOutlineCopy,
  AiOutlineCodeSandbox,
} from "react-icons/ai";

const Projects = () => {
  const { isOpen, setIsOpen, detailimages, setDetailImages } =
    useStateContext();
  console.log("pro", detailimages);

  const webData = [
    {
      title: "Ecommerce Store",
      imageUrl: images.ecoommerce,
      details: [
        images.ecommerce1,
        images.ecommerce2,
        images.ecommerce3,
        images.ecommerce4,
        images.ecommerce5,
      ],
      alt: "Ecommerce Store",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "GetLinked Website",
      imageUrl: images.GetlinkedWeb,
      details: [
        images.getLinkedWeb1,
        images.getLinkedWeb2,
        images.getLinkedWeb3,
        images.getLinkedWeb4,
        images.getLinkedWeb5,
      ],
      alt: "GetLinked Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "Samaan Website",
      imageUrl: images.Samaan,
      details: [images.sample, images.sample],
      alt: "Samaan Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "Art and History Website",
      imageUrl: images.aeSamaan,
      details: [images.sample, images.sample],
      alt: "Art and History Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "Takapuna Yatch Website",
      imageUrl: images.Takapuna,
      details: [images.sample, images.sample],
      alt: "Takapuna Yatch Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
  ];

  const mobileAppData = [
    {
      title: "Real Estate App",
      imageUrl: images.ecoommerce,
      details: [
        images.ecommerce1,
        images.ecommerce2,
        images.ecommerce3,
        images.ecommerce4,
        images.ecommerce5,
      ],
      alt: "Real Estate App",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "GetLinked Website",
      imageUrl: images.GetlinkedWeb,
      details: [
        images.getLinkedWeb1,
        images.getLinkedWeb2,
        images.getLinkedWeb3,
        images.getLinkedWeb4,
        images.getLinkedWeb5,
      ],
      alt: "GetLinked Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
  ];

  const CloneWebData = [
    {
      title: "Real Estate App",
      imageUrl: images.ecoommerce,
      details: [
        images.ecommerce1,
        images.ecommerce2,
        images.ecommerce3,
        images.ecommerce4,
        images.ecommerce5,
      ],
      alt: "Real Estate App",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "GetLinked Website",
      imageUrl: images.GetlinkedWeb,
      details: [
        images.getLinkedWeb1,
        images.getLinkedWeb2,
        images.getLinkedWeb3,
        images.getLinkedWeb4,
        images.getLinkedWeb5,
      ],
      alt: "GetLinked Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
  ];

  return (
    <div className="h-screen flex w-screen overflow-y-hidden">
      {isOpen ? (
        <div className="absolute z-20 w-full h-full flex overflow-y-hidden bg-black">
          <div className=" absolute z-30 flex ml-[70px] mt-[70px]">
            <div className=" sticky top-0 flex">
              <a href="" className=" items-center mr-3 flex justify-center">
                <div className=" w-[130px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                <div className=" absolute flex items-center  text-white font-montMed text-[12px]">
                  <AiOutlineLink />
                  <div className=" ml-2">Permalink</div>
                </div>
              </a>
              <a href="" className=" items-center flex justify-center">
                <div className=" w-[100px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                <div className=" absolute flex items-center  text-white font-montMed text-[12px]">
                  <AiOutlineGithub />
                  <div className=" ml-2">Github</div>
                </div>
              </a>
            </div>
          </div>
          <div className="pt-[70px] relative pl-[70px] grow-1 overflow-y-scroll no-scrollbar w-[95%]">
            {detailimages.map((detail, index) => (
              <div key={index}>
                <Image alt="sample" src={detail} />
              </div>
            ))}
            <div className="w-full h-[200px] bg-white"></div>
          </div>
          <div className=" grow-0 w-[5%] flex  flex-col items-center h-[100%] bg-black">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" h-[30px] flex justify-center items-center rounded-full cursor-pointer w-[30px] mt-[20px] mb-[30px] bg-gray-500"
            >
              <AiOutlineClose color="white" />
            </div>

            <div className=" flex flex-col justify-center mt-[30px] items-center">
              <div className=" flex justify-center items-center h-[50px] rounded-full w-[50px]  bg-white">
                <AiOutlineUser size={25} />
              </div>
              <p className=" font-montMed text-[12px] my-1 text-gray-300">
                Contact Us
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-[30px] ">
              <div className=" flex justify-center items-center h-[50px] rounded-full w-[50px]  bg-white">
                <AiOutlineBuild size={25} />
              </div>
              <p className=" font-montMed text-[12px] my-1 text-gray-300">
                Tools
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-[30px] ">
              <div className=" flex justify-center items-center h-[50px] rounded-full w-[50px]  bg-white">
                <AiOutlineShareAlt size={25} />
              </div>
              <p className=" font-montMed text-[12px] my-1 text-gray-300">
                Share
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-[30px] ">
              <div className=" flex justify-center items-center h-[50px] rounded-full w-[50px]  bg-white">
                <AiOutlineHeart size={25} />
              </div>
              <p className=" font-montMed text-[12px] my-1 text-gray-300">
                Like
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-[30px] ">
              <div className=" flex justify-center items-center h-[50px] rounded-full w-[50px]  bg-white">
                <AiOutlineWechatWork size={25} />
              </div>
              <p className=" font-montMed text-[12px] my-1 text-gray-300">
                Comment
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex justify-between mr-[5%] h-screen w-[95%]">
        <div className="pt-[10dvh] pl-[5%]  bg-purple-100 h-screen w-[18%]">
          <div>
            <div className="font-montMed">
              <a class="projectPageBts" href="/">
                Home
              </a>
            </div>
            <div className="font-montMed">
              <a class="projectPageBts" href="/ContactUs">
                Contact Us
              </a>
            </div>
            <h1 className="font-light mt-8">All Projects</h1>
            <div className="font-montMed">
              <a class="projectPageBts flex" className="ml-2" href="">
                <AiOutlineGlobal /> &nbsp; <p>Websites</p>
              </a>
            </div>
            <div className="font-montMed">
              <a class="projectPageBts flex" className="ml-2" href="">
                <AiOutlineMobile />
                &nbsp; <p>Mobile Apps</p>
              </a>
            </div>
            <div className="font-montMed">
              <a class="projectPageBts flex" className="ml-2" href="">
                <AiOutlineCopy />
                &nbsp; <p> Website Clones</p>
              </a>
            </div>
            <div className="font-montMed">
              <a class="projectPageBts flex" className="ml-2" href="">
                <AiOutlineCodeSandbox />
                &nbsp; <p> Others</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[80%] pb-[80px] relative overflow-y-scroll pt-[10dvh]">
          <div className=" font-montMed">Websties</div>

          <div className="mt-[5dvh] gap-[2rem] grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
            {webData.map((web, index) => (
              <Cards web={web} key={index} />

              //   <a
              //     key={index}
              //     className="w-[240px] shadow-md box-border relative block h-[330px]"
              //     href=""
              //   >
              //     <div className="h-[85%] relative flex ">
              //       <Image
              //         // className="webtemplate"
              //         alt={web.alt}
              //         className=" object-cover w-[full] h-[full] object-top transition-all duration-[3s] hover:object-bottom"
              //         src={web.imageUrl}
              //       />
              //     </div>
              //     <div className="h-[15%] py-[.9rem] px-[.1rem] bg-white">
              //       <p className="text-center">{web.title}</p>
              //     </div>
              //   </a>
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Mobile App</h1>
          <div className="gap-[2rem] grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
            {mobileAppData.map((app, index) => (
              <Cards web={app} key={index} />
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Website Clones</h1>
          <div className="gap-[2rem] grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
            {CloneWebData.map((clone, index) => (
              <Cards web={clone} key={index} />
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Other Designs</h1>
          <div className="gap-[2rem] grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
            {CloneWebData.map((clone, index) => (
              <Cards web={clone} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
