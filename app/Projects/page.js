"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/public/constant";
import { useState } from "react";
import { useStateContext } from "../context/StateContextProvider";
import {
  AiOutlineClose,
  AiOutlineShareAlt,
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
import { Cards } from "../components";
import Link from "next/link";

const Projects = () => {
  const {
    isOpen,
    setIsOpen,
    detailimages,
    setDetailImages,
    weblink,
    permalink,
  } = useStateContext();

  // console.log("pro", detailimages);

  const hasImages = detailimages && detailimages.length > 0;

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
      permalink: "https://wetechdesignstore.netlify.app/",
      Github: "https://github.com/We-techdesign4u/Ecommerce-Store",
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
      permalink: "https://we-techdesign4u.github.io/Getlinked/",
      Github: "https://github.com/We-techdesign4u/Getlinked",
    },
    {
      title: "Samaan Website",
      imageUrl: images.Samaan,
      details: [],
      alt: "Samaan Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "My Cakings Website",
      imageUrl: images.cake,
      details: [
        images.cake1,
        images.cake2,
        images.cake3,
        images.cake4,
        images.cake5,
      ],
      alt: "My Cakings website",
      permalink: "https://mycakings.netlify.app/",
      Github: "https://github.com/We-techdesign4u/mycakings",
    },
    {
      title: "Art and History Website",
      imageUrl: images.aeSamaan,
      details: [],
      alt: "Art and History Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
    {
      title: "Takapuna Yatch Website",
      imageUrl: images.Takapuna,
      details: [],
      alt: "Takapuna Yatch Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
  ];

  const mobileAppData = [
    {
      title: "Real Estate App",
      imageUrl: images.realEstate,
      details: [
        images.realEstate1,
        images.realEstate2,
        images.realEstate3,
        images.realEstate4,
        images.realEstate5,
        images.realEstate6,
        images.realEstate7,
        images.realEstate9,
      ],
      alt: "Real Estate App",
      permalink:
        "https://expo.dev/preview/update?message=Update&updateRuntimeVersion=1.0.0&createdAt=2025-10-03T12%3A39%3A26.249Z&slug=exp&projectId=fc174b80-2beb-4059-97c4-379d5adf2fc2&group=fe0a7597-f8b9-48de-b3c2-6910dec08226",
      Github: "https://github.com/We-techdesign4u/Home_Hunt",
    },
    {
      title: "GetLinked Website",
      imageUrl: images.GetlinkedWeb,
      details: [],
      alt: "GetLinked Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
    },
  ];

  const CloneWebData = [
    {
      title: "Gmail Clone",
      imageUrl: images.gmailm,
      details: [
        images.gmail,
        images.gmail2,
        images.gmail3,
        images.gmail4,
        images.gmail5,
      ],
      alt: "gmail clone",
      permalink: "https://we-techdesign4u.github.io/Gmail-Clone/",
      Github: "https://github.com/We-techdesign4u/Gmail-Clone",
    },
    {
      title: "Twitter Clone",
      imageUrl: images.twitter,
      details: [
        images.twitter1,
        images.twitter2,
        images.twitter3,
        images.twitter4,
        images.twitter5,
      ],
      alt: "twiter clone",
      permalink: "https://mytwitterclonepage.netlify.app/",
      Github: "https://github.com/We-techdesign4u/Twitter_home_page",
    },
  ];

  return (
    <div className="flex w-screen">
      {isOpen ? (
        <div className="fixed z-20 w-screen h-screen flex sm:flex-row flex-col-reverse overflow-y-hidden bg-black">
          <div className=" absolute z-30 flex sm:ml-[70px] sm:mt-[70px]">
            <div className=" sticky top-0 flex">
              <a
                href={permalink}
                className=" items-center mr-3 flex justify-center"
              >
                <div className=" w-[130px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                <div className=" absolute flex items-center  text-white font-montMed text-[12px]">
                  <AiOutlineLink />
                  <div className=" ml-2">Permalink</div>
                </div>
              </a>
              <a href={weblink} className=" items-center flex justify-center">
                <div className=" w-[100px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                <div className=" absolute flex items-center  text-white font-montMed text-[12px]">
                  <AiOutlineGithub />
                  <div className=" ml-2">Github</div>
                </div>
              </a>
            </div>
          </div>
          <div className="sm:pt-[70px] relative sm:pl-[70px] pl-5 sm:pr-0 pr-5 grow-1 overflow-y-scroll no-scrollbar w-full">
            {hasImages ? (
              <div>
                {detailimages?.map((detail, index) => (
                  <div key={index}>
                    <Image alt="sample" src={detail} />
                  </div>
                ))}
              </div>
            ) : (
              <div className=" bg-gray-700 w-full">
                <div className="opacity-80 w-full bg-black h-4">
                  <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
                </div>
                <p className=" text-center py-10 text-4xl sm:text-8xl font-montMed text-white font-black ">
                  MEN AT <span className="text-amber-300">WORK</span>
                </p>
                <div className="relative">
                  <div className="sm:w-[60px] w-[25px] absolute bottom-[30%]  right-[36%]">
                    <div className="sm:w-[20px]  w-[8px] sm:pl-[10px] pl-[3px] flex">
                      <Image className="steam sm:h-10 h-5" src={images.steam} />
                      <Image
                        className="steam-1 sm:h-10  h-5"
                        src={images.steam}
                      />
                      <Image
                        className="steam-2 sm:h-10  h-5"
                        src={images.steam}
                      />
                    </div>
                    <Image className="" src={images.mug} />
                  </div>
                  <div className="bug sm:w-[50px] w-[20px] h-auto absolute justify-items-center bottom-[35%] left-[10%]">
                    <Image className="" src={images.bug} />
                    <div className="sm:w-[30px] w-[12px] sm:-mt-[5px] -mt-[2px] flex justify-between">
                      <Image
                        className="legs sm:h-[10px] h-[4px] w-auto"
                        src={images.bugleg}
                      />
                      <Image
                        className="legs2 sm:h-[10px] h-[4px] w-auto"
                        src={images.bugleg}
                      />
                      <Image
                        className=" sm:h-[10px] h-[4px]  w-auto legs"
                        src={images.bugleg2}
                      />
                    </div>
                  </div>
                  <div className="deadbug sm:w-[50px] w-[20px] rotate-180 absolute bottom-[15%] justify-items-center left-[30%]   ">
                    <Image className="bug-2" src={images.bug} />
                    <div className="sm:w-[35px] w-[12px] sm:-mt-[5px] -mt-[2px] flex justify-between">
                      <Image
                        className="legs sm:h-[10px] h-[4px] w-auto"
                        src={images.bugleg}
                      />
                      <Image
                        className="legs2 sm:h-[10px] h-[4px] w-auto"
                        src={images.bugleg}
                      />
                      <Image
                        className=" sm:h-[10px] h-[4px]  w-auto legs"
                        src={images.bugleg2}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute h-[6px] sm:h-[36px] flex gap-4 sm:gap-12 right-[24%] top-[31%] justify-center items-center ">
                      <span className="blink sm:w-[14px] w-[2px] h-[6px] sm:h-[35px]  bg-black flex rounded-[50%]"></span>
                      <span className="blink sm:w-[12px] w-[2px] h-[6px] sm:h-[36px] bg-black flex rounded-[50%]"></span>
                    </div>
                    <Image className="w-full" src={images.animation} />
                  </div>
                </div>
                <p className=" text-center py-10 text-2xl sm:text-8xl font-montMed text-white font-black ">
                  UNDER <span className="text-amber-200">CONSTRUCTION</span>
                </p>
                <div className="opacity-80 w-full bg-black h-4">
                  <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
                </div>
              </div>
            )}
            <div className="w-full h-[200px] bg-white"></div>
          </div>
          <div className=" grow-0 sm:w-[90px] w-full px-5 sm:px-0 flex  sm:flex-col flex-row-reverse items-center justify-between bg-black">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" h-[30px] flex justify-center items-center rounded-full cursor-pointer w-[30px] mt-[20px] mb-[30px] bg-gray-500"
            >
              <AiOutlineClose color="white" />
            </div>
            <div className="flex flex-row sm:flex-col justify-between w-[250px]">
              <div className=" flex flex-col justify-center mt-[30px] items-center">
                <div className=" flex justify-center items-center p-2 sm:p-4  rounded-full  bg-white">
                  <AiOutlineUser />
                </div>
                <p className=" font-montMed my-1 text-[10px] text-gray-300">
                  Contact Us
                </p>
              </div>
              <div className="flex flex-col justify-center mt-[30px] items-center">
                <div className=" flex justify-center items-center p-2 sm:p-4 rounded-full  bg-white">
                  <AiOutlineBuild />
                </div>
                <p className=" font-montMed my-1 text-[10px] text-gray-300">
                  Tools
                </p>
              </div>
              <div className=" flex flex-col justify-center mt-[30px] items-center">
                <div className=" flex justify-center items-center p-2 sm:p-4 rounded-full  bg-white">
                  <AiOutlineShareAlt />
                </div>
                <p className="  font-montMed my-1 text-[10px] text-gray-300">
                  Share
                </p>
              </div>
              <div className=" flex flex-col justify-center mt-[30px] items-center">
                <div className=" flex justify-center items-center p-2 sm:p-4 rounded-full  bg-white">
                  <AiOutlineHeart />
                </div>
                <p className="  font-montMed my-1 text-[10px] text-gray-300">
                  Like
                </p>
              </div>
              <div className=" flex flex-col justify-center mt-[30px] items-center">
                <div className=" flex justify-center items-center p-2 sm:p-4 rounded-full  bg-white">
                  <AiOutlineWechatWork />
                </div>
                <p className="  font-montMed my-1 text-[10px] text-gray-300">
                  Comment
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex sm:flex-row flex-col justify-between mr-15 h-screen w-full">
        <div className=" relative bg-purple-100 h-screen w-screen block sm:w-[330px]">
          <div className=" pt-[10dvh] fixed z-10 pb-2 w-full sm:w-[250px] bg-purple-100 sm:pl-20 pl-5 ">
            <div className="font-montMed mb-2 ">
              <Link
                className="hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px] transition-[200ms]"
                href="/"
              >
                Home
              </Link>
            </div>
            <div className="font-montMed">
              <Link
                className="hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px] transition-[200ms]"
                href="/ContactUs"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="sm:pl-[90px] pl-8 pt-[120px]">
            <h1 className="font-light mt-8">All Projects</h1>
            <div className="font-montMed mb-2">
              <Link
                className="ml-2 hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px]  inline-flex"
                href=""
              >
                <AiOutlineGlobal /> <p>&nbsp;Websites</p>
              </Link>
            </div>
            <div className="font-montMed mb-2">
              <Link
                className="ml-2 hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px]  inline-flex"
                href=""
              >
                <AiOutlineMobile />
                <p> &nbsp;Mobile Apps</p>
              </Link>
            </div>
            <div className="font-montMed mb-2">
              <Link
                className="ml-2 hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px]  inline-flex"
                href=""
              >
                <AiOutlineCopy />
                <p>&nbsp;Website Clones</p>
              </Link>
            </div>
            <div className="font-montMed mb-2">
              <Link
                className="ml-2 hover:bg-primary hover:text-white text-black items-center px-[10px] py-[6px] rounded-[30px]  inline-flex"
                href=""
              >
                <AiOutlineCodeSandbox />
                <p>&nbsp;Others</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full px-8 pb-[80px] relative sm:overflow-y-scroll pt-[10dvh]">
          <p className=" font-montMed">Websties</p>

          <div className="mt-[5dvh] gap-[2rem] justify-items-center grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {webData.map((web, index) => (
              <Cards web={web} key={index} />
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Mobile App</h1>
          <div className="gap-[2rem] justify-items-center grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mobileAppData.map((app, index) => (
              <Cards web={app} key={index} />
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Website Clones</h1>
          <div className=" gap-[2rem] justify-items-center grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CloneWebData.map((clone, index) => (
              <Cards web={clone} key={index} />
            ))}
          </div>
          <h1 className="pt-[50px] pb-[30px]">Other Designs</h1>
          <div className=" gap-[2rem] justify-items-center grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
