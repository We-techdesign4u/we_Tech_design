"use client";
import Image from "next/image";
import { images } from "../public/constant";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Animation, GDButton, SecButton } from "./components";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillX,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Home() {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedLanding");

    if (!hasVisited) {
      setTimeout(() => {
        setPlayAnimation(true);
      }, 0);

      sessionStorage.setItem("hasVisitedLanding", "true");
      const timer = setTimeout(() => {
        setPlayAnimation(false);
        setShowLanding(true);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      setShowLanding(true);
    }
  }, []);

  return (
    <div className="bg-[url(/assets/images/bg3.png)] lg:overflow-x-hidden bg-center bg-cover bg-no-repeat m-0 p-0">
      {playAnimation && <Animation />}
      {showLanding && (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[100vh] w-screen justify-center">
          <div className="w-screen   lg:w-fit lg:max-w-[720px] pt-[0.5dvh] lg:pt-[10dvh] pl-5 pr-5 lg:pl-[20dvh] pb-[3dvh] flex flex-row justify-center items-end lg:h-[100vh] ">
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              {/*Logo */}
              <div className="w-full flex justify-center lg:justify-start">
                <a href="http://">
                  <Image
                    className="h-[7dvh] w-auto"
                    src={images.logoblack}
                    alt="logo"
                  />
                </a>
              </div>

              {/*welcome */}
              <div className="w-full  justify-center lg:justify-start flex flex-row">
                <div>
                  <p className="text-gray-800 lg:text-[70px] xl:text-[100px] text-[60px] lg:leading-[15dvh]  leading-[10dvh]  font-montHair">
                    Welc
                  </p>
                </div>
                <div
                  // class="anicenter"
                  className="  relative lg:w-[50px] lg:h-[100px] xl:h-[110px] xl:w-[70px] h-[8.5vh] w-[45px] flex float-left items-end"
                >
                  <svg class="artwork" viewBox="0 0 91.12 91.12">
                    <g style={{ isolation: "isolate" }}>
                      <g>
                        <circle
                          class="shadow"
                          cx="47.8"
                          cy="47.61"
                          r="40.74"
                          style={{
                            fill: "#231f20",
                            mixBlendMode: "multiply",
                            opacity: 0.15,
                          }}
                        />
                        <circle
                          class="face"
                          cx="43.17"
                          cy="42.5"
                          r="40.6"
                          transform="translate(-16.19 30.41) rotate(-33.03)"
                          style={{ fill: "#f1c43b" }}
                        />
                        <path
                          class="faceoverlay"
                          d="M83.32,36.46A40,40,0,0,1,3.58,33.54,40,40,0,0,0,2.6,41a40.6,40.6,0,1,0,80.72-4.55Z"
                          style={{
                            fill: "#f1c43b",

                            mixBlendMode: "multiply",
                            opacity: 0.5,
                          }}
                        />
                        <path
                          class="mouthopenblack"
                          d="M55.21,53.82c4.47-5.17,4.07-12.63,4.07-12.63H56.12c-1.23,1.59-4.58,2.94-12.95,2.94s-11.73-1.35-13-2.94H27.07s-.4,7.45,4.06,12.63c2.75-1.65,7.11-2.73,12-2.73S52.46,52.17,55.21,53.82Z"
                          style={{ fill: "#383938" }}
                        />
                        <path
                          class="teeth"
                          d="M43.17,44.13c8.37,0,11.72-1.35,12.95-2.94H30.21C31.44,42.78,34.79,44.13,43.17,44.13Z"
                          style={{ fill: "#fff" }}
                        />
                        <path
                          class="tongue"
                          d="M43.17,58.68c5.92,0,9.67-2.11,12-4.86-2.75-1.65-7.11-2.73-12-2.73s-9.29,1.08-12,2.73C33.51,56.57,37.26,58.68,43.17,58.68Z"
                          style={{ fill: "#e8494a" }}
                        />

                        <line
                          class="eyesclosedR"
                          x1="54.01"
                          y1="30.9"
                          x2="63.61"
                          y2="30.9"
                          style={{
                            fill: "none",
                            stroke: "#383938",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        />
                        <path
                          class="irisR"
                          d="M52.14,29.43c0-3.8,2.08-6.87,4.65-6.87s4.65,3.07,4.65,6.87-2.08,6.87-4.65,6.87S52.14,33.22,52.14,29.43Z"
                          style={{ fill: "#383938" }}
                        />
                        <path
                          class="pupilR"
                          d="M54,26.4a2.79,2.79,0,1,1,2.79,2.78A2.79,2.79,0,0,1,54,26.4Z"
                          style={{ fill: "#fff" }}
                        />
                        <line
                          class="eyesclosedL"
                          x1="24.62"
                          y1="30.9"
                          x2="34.23"
                          y2="30.9"
                          style={{
                            fill: "none",
                            stroke: "#383938",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        />
                        <path
                          class="irisL"
                          d="M34,29.43c0-3.8-2.09-6.87-4.66-6.87s-4.65,3.07-4.65,6.87,2.08,6.87,4.65,6.87S34,33.22,34,29.43Z"
                          style={{ fill: "#383938" }}
                        />
                        <path
                          class="pupilL"
                          d="M26.57,26.4a2.78,2.78,0,1,1,2.78,2.78A2.78,2.78,0,0,1,26.57,26.4Z"
                          style={{ fill: "#fff" }}
                        />
                        <path
                          class="smilecurve"
                          d="M25.71,48.07s4.78,9,17.14,9.41,17.78-8.14,17.78-8.14"
                          style={{
                            fill: "none",
                            stroke: "#383938",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 lg:text-[70px] xl:text-[100px] text-[60px] leading-[10dvh] lg:leading-[15dvh] font-montHair">
                    me
                  </p>
                </div>
              </div>
              {/*about */}
              <div className="lg:w-[87dvh]  w-full pt-5">
                <p className=" text-gray-800 text-center lg:text-left font-bricolage lg:pt-6 xl:pt-11  pb-4 font-bold text-5xl">
                  I’m Oladapo
                </p>
                <p className="lg:text-left lg:max-w-[420px] text-gray-800 text-center text-[18px] font-bricolage">
                  A self-taught frontend developer & graphic designer. 8+ years
                  experience in design , 1+ year building fast web and mobile
                  apps.
                  <br></br>One person who can design, code, and ship it.
                </p>
              </div>
              {/*buttons */}
              <div className="flex flex-row gap-3 lg:justify-start justify-center">
                <SecButton
                  title={"Projects..."}
                  withicon={"false"}
                  url={"/Projects"}
                />
                <SecButton
                  title={"About Me"}
                  withicon={"false"}
                  url={"/ContactUs"}
                />
              </div>

              {/*icons */}
              <div className="w-full lg:justify-start justify-center flex">
                <div className="w-[100px] flex h-[30px] my-[30px] items-center box-border justify-between">
                  <a href="www.github.com/We-techdesign4u">
                    <AiFillGithub size={20} className=" fill-purple-900" />
                  </a>
                  <a href="https://www.linkedin.com/in/ganiyu-olowookere-9396b193">
                    <AiFillLinkedin size={20} className=" fill-purple-900" />
                  </a>
                  <a href="https://x.com/Mr_deepee">
                    <p className="text-purple-900 font-black text-[20px]">X</p>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          {/**images */}
          <div className=" w-screen lg:max-w-[900px] relative overflow-clip h-[500px] lg:h-full -mr-[12dvh] lg:mask-none mask-b-from-60% mask-b-to-98% ">
            <div className=" lg:-mt-[70px] -mt-10 lg:-ml-0 ml-[50px] md:ml-[200px]  flex overflow-clip -rotate-28 lg:w-[990px] w-[140%] md:w-[90%]  absolute ">
              <motion.div
                initial={{ x: 800 }}
                animate={{ x: [800, -5, 10, 0] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                // class="projectSlide"
                className="flex"
              >
                <div className=" lg:mt-[390px] mt-[150px] lg:h-[370px] lg:w-[225px] ">
                  <Image alt="getlinkedweb" src={images.GetlinkedWeb} />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 800 }}
                animate={{ x: [800, -5, 10, 0] }}
                transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                //  class="projectSlide2"
                className=" mx-[12px]"
              >
                <div className="lg:h-[585px] bg-cover bg-no-repeat bg-top bg-[url(/assets/images/cake.jpg)] mt-3 mb-[12px] lg:w-[225px]">
                  <Image
                    alt="takapuna"
                    className=" opacity-0"
                    src={images.Takapuna}
                  />
                </div>
                <div className="lg:h-[420px]  overflow-clip lg:w-[225px]">
                  <Image alt="samman" src={images.Samaan} />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 800 }}
                animate={{ x: [800, -5, 10, 0] }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                //  class="projectSlide3"
                className=""
              >
                <div className="lg:h-[165px] lg:w-[225px]  overflow-clip">
                  <Image alt="ecommerce" src={images.ecoommerce} />
                </div>
                <div className="lg:h-[580px] my-[12px] overflow-clip lg:w-[225px]">
                  <Image alt="getlinkedm" src={images.Getlinkedm} />
                </div>
                <div className="lg:h-[270px] lg:w-[225px]">
                  <Image alt="Takapuna" src={images.Takapuna} />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 800 }}
                animate={{ x: [800, -5, 10, 0] }}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                //  class="projectSlide4"
                className="mx-[12px]"
              >
                <div className="lg:h-[500px] lg:w-[225px] mt-17 mb-[12px] overflow-clip">
                  <Image alt="Samaan" className=" " src={images.Samaan} />
                </div>
                <div className="lg:h-[270px] lg:w-[225px]">
                  <Image alt="Takapuna" src={images.Takapuna} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
