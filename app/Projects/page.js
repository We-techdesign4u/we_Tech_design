"use client";
import React from "react";

import Image from "next/image";
import { images } from "../../public/constant";
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

import { MenAtWork, SecCard } from "../components";

import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const { theme, setTheme } = useTheme();

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
      Desc: "An Ecommerce website template for bags, easy to update products for non-coding clients",
      Tools: ["React", "Sanity", "Tailwind"],
      More: "3",
      HashTag: ["#Ecommerce", "#Store", "#Published"],
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
      Desc: "An hackathon challenge for young front-end developers on Twitter",
      Tools: ["HTML", "CSS", "JavaScript"],
      More: "2",
      HashTag: ["#hackathon", "#Challenge", "#Published"],
    },
    {
      title: "Samaan Website",
      imageUrl: images.Samaan,
      details: [],
      alt: "Samaan Website",
      permalink: "www.website.com",
      Github: "www.repository.com",
      Desc: "Samaan Coachworks ~ This is a startup effort to redesign classic BMWs to the extent that Alpina and Hartge did. SAMAAN COACHWORKS is classic car “restomod” from the perspective of an architect and Industrial Designer, with cars as the canvas for artwork.",
      Tools: ["HTML", "Canvas", "Taiwind"],
      More: "2",
      HashTag: ["#Car", "#Store", "#Draft"],
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
      Desc: "An ecommerce website template for any product, easy to update  for non-coding clients",
      Tools: ["React", "Sanity", "Taiwind"],
      More: "3",
      HashTag: ["#Ecommerce", "#Store", "#Published"],
    },
    {
      title: "Framer Agency Portfolio",
      imageUrl: images.framer,
      details: [
        images.framer1,
        images.framer2,
        images.framer3,
        images.framer4,
        images.framer5,
      ],
      alt: "framer agency portfolio",
      permalink: "https://we-tech-agencyfolio.framer.website/",
      Github: "www.repository.com",
      Desc: "A production-ready Framer template built for agencies, consultants, and studios who want to launch high-converting client websites fast. Includes modular sections, CMS-powered pages, responsive layouts, and clean components — fully customizable without code and optimized for real-world workflows.",
      Tools: ["Framer", "Figma"],
      More: "2",
      HashTag: ["#Framer", "#Portfolio", "#Agency"],
    },

    {
      title: "Takapuna Yacht Website",
      imageUrl: images.Takapuna,
      details: [],
      alt: "Takapuna Yacht Website",
      permalink: "www.website.com",
      Github: "www.respository.com",
      Desc: "A Yacht rental website, with the ability to book a Yacht and make payment directly on the webpage",
      Tools: ["Wordpress", "shopify", "css"],
      More: "2",
      HashTag: ["#Ecommerce", "#Store", "#Draft"],
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
      Desc: "A real estate app with search and listing platforms focused on providing a clean, responsive, and intuitive user experience. ",
      Tools: ["React", "Sanity", "Node.js"],
      More: "2",
      HashTag: ["#Ecommerce", "#Store", "#Published"],
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
      Desc: "A pixel-perfect clone of the Gmail web application interface, meticulously replicating its complex UI",
      Tools: ["React", "Sanity", "Taiwind"],
      More: "2",
      HashTag: ["#Ecommerce", "#Store", "#Published"],
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
      alt: "twitter clone",
      permalink: "https://mytwitterclonepage.netlify.app/",
      Github: "https://github.com/We-techdesign4u/Twitter_home_page",
      Desc: "This clone Twitter page showcases my mastery of modern frontend architecture, including efficient state management and responsive design.",
      Tools: ["React", "Sanity", "Taiwind"],
      More: "2",
      HashTag: ["#Ecommerce", "#Store", "#Published"],
    },
  ];

  const OtherData = [];
  const defaultBt = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/ContactUs" },
  ];
  const projectBt = [
    { title: "Websites", href: "#web", icons: <AiOutlineGlobal /> },
    { title: "Mobile Apps", href: "#app", icons: <AiOutlineMobile /> },
    { title: "Website Clones", href: "#clone", icons: <AiOutlineCopy /> },
    { title: "Other", href: "#other", icons: <AiOutlineCodeSandbox /> },
  ];

  const MenuBtns = ({ prop }) => {
    return (
      <div className="lg:mb-2 pr-2">
        <a
          className="hover:bg-bgExlight dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-100 lg:w-full hover:text-primary text-gray-600  items-center px-[10px] py-[8px] rounded-[10px]  inline-flex"
          href={prop.href}
        >
          {prop.icons}
          <p className="text-[13px] font-interV">&nbsp;{prop.title}</p>
        </a>
      </div>
    );
  };

  return (
    <div className="flex w-screen bg-white dark:bg-black">
      {isOpen ? (
        <div className="fixed z-40 w-screen h-screen flex  lg:flex-row overflow-y-hidden bg-black">
          <div className="lg:max-w-[1500px] w-full overflow-x-hidden flex lg:flex-row flex-col-reverse relative overflow-y-hidden">
            <div className=" hidden  absolute z-30 lg:flex lg:ml-[70px] lg:mt-[70px] top-22 lg:top-0 left-5">
              <div className=" sticky top-0 flex">
                <a
                  href={permalink}
                  className=" items-center mr-3 flex justify-center"
                >
                  <div className=" w-[130px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                  <div className=" absolute flex items-center  text-white font-interV text-[12px]">
                    <AiOutlineLink />
                    <div className=" ml-2">Permalink</div>
                  </div>
                </a>
                <a href={weblink} className=" items-center flex justify-center">
                  <div className=" w-[100px] h-[30px] rounded-full opacity-75 bg-black mix-blend-multiply"></div>
                  <div className=" absolute flex items-center  text-white font-interV text-[12px]">
                    <AiOutlineGithub />
                    <div className=" ml-2">Github</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="lg:pt-[70px] relative lg:pl-[70px] pl-5 lg:pr-0 pr-5 grow-1 overflow-y-scroll no-scrollbar w-full">
              {hasImages ? (
                <div>
                  {detailimages?.map((detail, index) => (
                    <div key={index}>
                      <Image alt="sample" className="w-full" src={detail} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full relative  flex justify-center">
                  {/* Background */}
                  <Image
                    className="object-contain w-[100%] md:w-[60%] "
                    src={images.work}
                    alt=""
                  />

                  {/* Crane container (moves forward & back) */}
                  <motion.div
                    className="absolute top-[28%] w-[50%] md:w-[30%] md:right-[25%] right-[15%]"
                    animate={{ x: [-30, 30, -30] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Crane body */}
                    <Image
                      className="w-full object-contain"
                      src={images.crane}
                      alt=""
                    />

                    {/* Swing (rotates from top center) */}
                    <motion.div
                      className="absolute top-0 right-[70%] w-[60%]"
                      style={{ transformOrigin: "50% 0%" }}
                      animate={{ rotate: [-15, 15, -15] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        className="w-full object-contain"
                        src={images.swing}
                        alt=""
                      />
                    </motion.div>
                  </motion.div>
                </div>
                // <div className=" bg-cyan-900 w-full">
                //   <div className="opacity-80 w-full bg-black h-4">
                //     <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
                //   </div>
                //   <p className=" text-center py-10 text-4xl lg:text-8xl font-montMed text-white font-black ">
                //     MEN AT <span className="text-amber-500">WORK</span>
                //   </p>
                //   <div className="relative">
                //     <div className="lg:w-[60px] w-[25px] absolute bottom-[30%]  right-[36%]">
                //       <div className="lg:w-[20px]  w-[8px] lg:pl-[10px] pl-[3px] flex">
                //         <Image
                //           alt="steam"
                //           className="steam lg:h-10 h-5"
                //           src={images.steam}
                //         />
                //         <Image
                //           alt="steam2"
                //           className="steam-1 lg:h-10  h-5"
                //           src={images.steam}
                //         />
                //         <Image
                //           alt="steam3"
                //           className="steam-2 lg:h-10  h-5"
                //           src={images.steam}
                //         />
                //       </div>
                //       <Image alt="mug" className="" src={images.mug} />
                //     </div>
                //     <div className="bug lg:w-[50px] w-[20px] h-auto absolute justify-items-center bottom-[35%] left-[10%]">
                //       <Image className="" src={images.bug} />
                //       <div className="lg:w-[30px] w-[12px] lg:-mt-[5px] -mt-[2px] flex justify-between">
                //         <Image
                //           className="legs lg:h-[10px] h-[4px] w-auto"
                //           src={images.bugleg}
                //         />
                //         <Image
                //           className="legs2 lg:h-[10px] h-[4px] w-auto"
                //           src={images.bugleg}
                //         />
                //         <Image
                //           className=" lg:h-[10px] h-[4px]  w-auto legs"
                //           src={images.bugleg2}
                //         />
                //       </div>
                //     </div>
                //     <div className="deadbug lg:w-[50px] w-[20px] rotate-180 absolute bottom-[15%] justify-items-center left-[30%]   ">
                //       <Image className="bug-2" src={images.bug} />
                //       <div className="lg:w-[35px] w-[12px] lg:-mt-[5px] -mt-[2px] flex justify-between">
                //         <Image
                //           className="legs lg:h-[10px] h-[4px] w-auto"
                //           src={images.bugleg}
                //         />
                //         <Image
                //           className="legs2 lg:h-[10px] h-[4px] w-auto"
                //           src={images.bugleg}
                //         />
                //         <Image
                //           className=" lg:h-[10px] h-[4px]  w-auto legs"
                //           src={images.bugleg2}
                //         />
                //       </div>
                //     </div>
                //     <div className="relative">
                //       <div className="absolute h-[6px] lg:h-[36px] flex gap-4 lg:gap-12 right-[24%] top-[31%] justify-center items-center ">
                //         <span className="blink lg:w-[14px] w-[2px] h-[6px] lg:h-[35px]  bg-black flex rounded-[50%]"></span>
                //         <span className="blink lg:w-[12px] w-[2px] h-[6px] lg:h-[36px] bg-black flex rounded-[50%]"></span>
                //       </div>
                //       <Image className="w-full" src={images.animation} />
                //     </div>
                //   </div>
                //   <p className=" text-center py-10 text-2xl lg:text-8xl font-montMed text-white font-black ">
                //     UNDER <span className="text-amber-500">CONSTRUCTION</span>
                //   </p>
                //   <div className="opacity-80 w-full bg-black h-4">
                //     <div className="bg-[url('/assets/images/line.png')] h-full w-"></div>
                //   </div>
                // </div>

                // <MenAtWork />
              )}
            </div>
            <div className=" grow-0 lg:w-[90px] w-full px-5 lg:px-0 flex  lg:flex-col flex-row-reverse items-center justify-between bg-black">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" h-[30px] flex justify-center items-center rounded-full cursor-pointer w-[30px] mt-[20px] mb-[30px] bg-gray-500"
              >
                <AiOutlineClose color="white" />
              </div>
              <div className="flex flex-row lg:flex-col lg:py-10 justify-between w-[250px]">
                <Link
                  href={"/ContactUs"}
                  className=" flex flex-col justify-center mt-[30px] items-center"
                >
                  <div className=" flex justify-center items-center p-2 lg:p-4  rounded-full  bg-white">
                    <AiOutlineUser />
                  </div>
                  <p className=" font-montMed my-1 text-[10px] text-gray-300">
                    Contact Us
                  </p>
                </Link>
                <a
                  href="#tool"
                  className="flex flex-col justify-center mt-[30px] items-center"
                >
                  <div className=" flex justify-center items-center p-2 lg:p-4 rounded-full  bg-white">
                    <AiOutlineBuild />
                  </div>
                  <p className=" font-montMed my-1 text-[10px] text-gray-300">
                    Stack
                  </p>
                </a>

                <a
                  href={permalink}
                  className=" flex flex-col justify-center mt-[30px] items-center"
                >
                  <div className=" flex justify-center items-center p-2 lg:p-4 rounded-full  bg-white">
                    <AiOutlineLink />
                  </div>
                  <p className="  font-montMed my-1 text-[10px] text-gray-300">
                    Link
                  </p>
                </a>
                <a
                  href={weblink}
                  className=" flex flex-col justify-center mt-[30px] items-center"
                >
                  <div className=" flex justify-center items-center p-2 lg:p-4 rounded-full  bg-white">
                    <AiOutlineGithub />
                  </div>
                  <p className="  font-montMed my-1 text-[10px] text-gray-300">
                    Github
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex lg:flex-row flex-col text-gray-600 font-normal mr-15 h-screen w-full lg:justify-center">
        {/**Menu */}
        <div className=" relative lg:border-r-[2px] lg:border-b-0 border-b-2 border-gray-200 bg-white dark:bg-black dark:border-gray-700 h-screen w-screen block lg:w-[350px]">
          <div className=" pt-8 lg:pt-[10dvh] fixed z-30 pb-2 w-full lg:w-[280px]  lg:pl-20 pl-5 bg-white dark:bg-black">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" lg:w-[100px]  w-[60px] h-[140px] -mt-18   cursor-pointer absolute lg:right-[32%] right-[10%] z-50"
            ></button>
            {/**lamp */}
            <div className="lg:w-full   w-[140px]  lg:h-[210px] h-[150px] overflow-x-clip  absolute -z-50 top-0 lg:left-0 right-0">
              <div className=" relative h-full justify-items-center ">
                <div className=" flex lg:h-full h-[110px] w-full  overflow-clip relative">
                  <div className="w-[300px] bottom-0 origin-bottom-right lg:-left-[300px] -left-[300px] absolute lg:rotate-45 rotate-45 z-10 h-[350px] bg-white lg:bg-LtBackground dark:bg-black flex"></div>
                  <div className="w-[300px] bottom-0 origin-bottom-left lg:-right-[300px] -right-[300px] lg:-rotate-45 -rotate-45 absolute z-10   h-[350px] bg-white lg:bg-LtBackground dark:bg-black flex"></div>
                </div>
                <div className="absolute h-[80px] top-0 lg:h-[120px] z-5 w-[180px] bg-gray-600"></div>
                <div className="lg:h-[140px] absolute top-0 h-[89px] lg:w-[40px] w-[20px] bg-amber-300 dark:bg-gray-800 dark:border-gray-700 dark:border-[2px] flex rounded-b-full "></div>

                <div className="lg:w-[200px] w-[120px] h-[120px] -z-10 absolute top-0 lg:h-[200px] rounded-full bg-amber-100 dark:bg-transparent blur-[40px] lg:blur-[100px]"></div>
              </div>
              <div className="block absolute top-0 z-20  w-full justify-items-center">
                <span className="h-[32px] lg:h-[59px] flex w-[3px] bg-gray-600"></span>
                <span className="lg:w-[14px] w-[10px] h-[12px] lg:h-[20px] flex rounded-t-md bg-gray-400"></span>
              </div>
            </div>

            <div className="w-full lg:h-[120px] h-[0px]   "></div>
            {defaultBt.map((btn, i) => (
              <MenuBtns prop={btn} key={i} />
            ))}
          </div>
          {/**Projects btn */}
          <div className="lg:pl-[90px] text-gray-600 pl-8 pt-24 lg:pt-[270px]">
            <p className=" mt-8 mb-4 font-interV text-gray-600 dark:text-white font-semibold">
              All Projects
            </p>
            {projectBt.map((btn, i) => (
              <MenuBtns prop={btn} key={i} />
            ))}
          </div>
        </div>
        {/**Projects */}
        <div className="w-full px-8 pb-[80px] lg:max-w-[1450px] relative bg-LtBackground lg:overflow-y-scroll pt-[10dvh]  dark:bg-black">
          <div id="web">
            <div className="sticky top-0 z-10 backdrop-blur-[50px]  py-4 px-8">
              <p className=" text-2xl font-inter font-semibold dark:text-white text-gray-600">
                Websites
              </p>
              <div className="py-3 gap-2 inline-flex ">
                <a href="">
                  <span className="px-4 py-2  bg-gray-100 dark:bg-gray-700 dark:text-white text-[13px] font-inter font-semibold rounded-sm">
                    All
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black  hover:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Published
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black hover:bg-gray-100 active:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Draft
                  </span>
                </a>
              </div>
            </div>
            <div className="my-[5dvh] gap-[2rem] justify-items-center grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
              {webData.map((web, index) => (
                <SecCard web={web} key={index} />
              ))}
            </div>
          </div>
          <div id="app">
            <div className="sticky top-0 z-10 backdrop-blur-[50px]  py-4 px-8">
              <p className=" text-2xl font-inter font-semibold dark:text-white text-gray-600">
                Mobile Apps
              </p>
              <div className="py-3 gap-2 inline-flex ">
                <a href="">
                  <span className="px-4 py-2  bg-gray-100 dark:bg-gray-700 dark:text-white text-[13px] font-inter font-semibold rounded-sm">
                    All
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black  hover:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Published
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black hover:bg-gray-100 active:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Draft
                  </span>
                </a>
              </div>
            </div>

            <div className="my-[5dvh] gap-[2rem] justify-items-center grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
              {mobileAppData.map((web, index) => (
                <SecCard web={web} key={index} />
              ))}
            </div>
          </div>

          <div id="clone">
            <div className="sticky top-0 z-10 backdrop-blur-[50px]  py-4 px-8">
              <p className=" text-2xl font-inter font-semibold text-gray-600 dark:text-white">
                Website Clones
              </p>
              <div className="py-3 gap-2 inline-flex ">
                <a href="">
                  <span className="px-4 py-2  bg-gray-100 dark:bg-gray-700 dark:text-white text-[13px] font-inter font-semibold rounded-sm">
                    All
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black  hover:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Published
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black hover:bg-gray-100 active:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Draft
                  </span>
                </a>
              </div>
            </div>

            <div className="my-[5dvh] gap-[2rem] justify-items-center grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
              {CloneWebData.map((web, index) => (
                <SecCard web={web} key={index} />
              ))}
            </div>
          </div>
          <div id="other">
            <div className="sticky top-0 z-10 backdrop-blur-[50px]  py-4 px-8">
              <p className=" text-2xl  font-inter font-semibold text-gray-600 dark:text-white">
                Other Designs
              </p>
              <div className="py-3 gap-2 inline-flex ">
                <a href="">
                  <span className="px-4 py-2  bg-gray-100 dark:bg-gray-700 dark:text-white text-[13px] font-inter font-semibold rounded-sm">
                    All
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black  hover:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Published
                  </span>
                </a>
                <a href="">
                  <span className="px-4 py-2 dark:text-white dark:hover:text-black hover:bg-gray-100 active:bg-gray-100 text-[13px] font-inter font-semibold rounded-sm">
                    Draft
                  </span>
                </a>
              </div>
            </div>
            <div className="my-[5dvh] gap-[2rem] justify-items-center grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
              {OtherData.map((web, index) => (
                <SecCard web={web} key={index} />
              ))}
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
