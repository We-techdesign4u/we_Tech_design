"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function Animation() {
  const nameisLetters = "nameis".split("");
  const nameis = "nameis".split("");
  const ganiyu = "Oladapo".split("");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url(/assets/images/bg3.png)] bg-cover bg-center bg-no-repeat font-extrabold text-6xl lg:overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center ">
        {/* Stage 1: “Hi, my” */}
        <motion.div
          className="flex"
          initial={{ opacity: 1, rotate: 0 }}
          animate={{
            rotate: [0, 70],
            opacity: [1, 0],
          }}
          transition={{
            delay: 0.9, // scaled
            duration: 0.4, // scaled
            ease: "easeInOut",
          }}
        >
          <motion.span
            initial={{ scale: 0, x: 50 }}
            animate={{ scale: [0, 1.3, 1], x: [50, 0] }}
            transition={{
              duration: 0.6, // scaled
              times: [0, 0.6, 1],
              ease: "backOut",
            }}
            className="text-black text-[3rem] font-playfair"
          >
            Hi,
          </motion.span>

          <motion.span
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: [80, -20, 0], opacity: [0, 1, 1] }}
            transition={{
              delay: 0.35, // scaled
              duration: 0.48, // scaled
              ease: "easeOut",
            }}
            className="text-black font-playfair text-[3rem]"
          >
            my
          </motion.span>
        </motion.div>

        {/* Stage 2: nameis → Ganiyu */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: -70, opacity: 0, scale: 1 }}
          animate={{
            rotate: [-70, 0, 0, -120],
            opacity: [0, 1, 1, 0],
            scale: [1, 1, 1, 0.8],
          }}
          transition={{
            delay: 1.2, // scaled
            duration: 1.55, // scaled
            times: [0, 0.2, 0.8, 1],
            ease: "easeOut",
          }}
        >
          <div className="relative overflow-y-clip">
            <motion.div className="flex  items-center justify-center">
              {nameis.map((letter, i) => (
                <motion.span
                  key={`nameis-${i}`}
                  initial={{ y: 0 }}
                  animate={{ y: -120 }}
                  transition={{
                    duration: 0.8, // scaled
                    delay: 1.37 + i * 0.12, // scaled
                    ease: "easeInOut",
                  }}
                  className="inline-block font-playfair text-[4rem] leading-tight text-black"
                >
                  {letter}
                </motion.span>
              ))}

              <div className="absolute flex justify-between">
                {ganiyu.map((letter, i) => (
                  <motion.span
                    key={`ganiyu-${i}`}
                    initial={{ y: 120 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 1.37 + i * 0.12 + 0.24, // scaled
                      duration: 0.35, // scaled
                      ease: "backOut",
                    }}
                    className="inline-block text-[4rem] font-playfair leading-tight text-[black]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stage 3: “I’m a” */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: 120, opacity: 0 }}
          animate={{ rotate: [120, 0, 0], opacity: [0, 1, 0] }}
          transition={{
            delay: 2.7, // scaled
            duration: 0.49, // scaled
            ease: "easeOut",
          }}
        >
          <span className="whitespace-nowrap font-playfair text-[4rem]">
            I'm a
          </span>
        </motion.div>

        {/* Stage 4 & 5: Frontend + Developer */}
        <div className=" flex flex-col absolute  ">
          <motion.div
            className="text-Black lg:text-[6rem] text-[3rem] font-playfair relative leading-none perspective-[500px]"
            style={{ display: "inline-block", transformOrigin: "50% 100%" }}
            initial={{ rotateX: 120, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 3.2, duration: 0.005 }, // scaled
              rotateX: {
                delay: 3.2,
                duration: 0.74, // scaled
                ease: [0.14, 1.23, 0.33, 1.16],
              },
            }}
          >
            <p>Frontend</p>
          </motion.div>

          <motion.div
            className="text-[#2A004D]  lg:text-[3.5rem] text-[1.8rem] font-playfair font-normal leading-none perspective-[500px] "
            style={{ display: "inline-block", transformOrigin: "50% 100%" }}
            initial={{ rotateX: 120, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 3.4, duration: 0.005 }, // scaled (+0.2s)
              rotateX: {
                delay: 3.4,
                duration: 0.74, // scaled
                ease: [0.14, 1.23, 0.33, 1.16],
              },
            }}
          >
            <p>Web&App-Developer</p>
          </motion.div>
          <motion.div
            className="flex justify-between items-center flex-row absolute  lg:right-3 lg:top-3 right-1 top-1  lg:w-[100px] w-[60px] lg:h-[80px] h-[50px] "
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 1, 1],
            }}
            transition={{
              delay: 5,
            }}
          >
            <div className="p-1  justify-center h-auto lg:w-[32px]  w-[20px] flex flex-col">
              <div className=" overflow-clip -mb-[3px] lg:w-[30px] w-[20px] h-[6px] flex justify-center items-end -rotate-45 origin-left">
                <motion.span
                  initial={{ x: 32 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 4, duration: 0.2, ease: "easeInOut" }}
                  className=" bg-amber-100 w-full h-[4px]"
                ></motion.span>
              </div>
              <div className="overflow-clip  lg:w-[30px] w-[20px] h-[6px] -mt-[3px] flex rotate-45 origin-left ">
                <motion.span
                  initial={{ x: -32 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 4.2, duration: 0.2 }}
                  className=" bg-amber-100 w-full h-[4px]"
                ></motion.span>
              </div>
            </div>
            <div className=" flex justify-center items-center  h-full w-[20px] lg:w-[30px]">
              <div className="flex lg:h-[80px] h-[50px] w-[8px] justify-center items-center overflow-clip rotate-25">
                <motion.span
                  initial={{ y: 82 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 4.8, duration: 0.2 }}
                  className="bg-amber-600 flex h-full w-[4px]"
                ></motion.span>
              </div>
            </div>

            <div className=" justify-center  h-auto w-[32px] flex flex-col">
              <div className=" overflow-clip -mb-[3px] lg:w-[30px] w-[20px] h-[6px] flex justify-center items-end rotate-45 origin-right">
                <motion.span
                  initial={{ x: 32 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 4.6, duration: 0.2 }}
                  className=" bg-amber-100 w-full h-[4px]"
                ></motion.span>
              </div>

              <div className=" overflow-clip lg:w-[30px] w-[20px] h-[6px] -mt-[3px] flex -rotate-45 origin-right ">
                <motion.span
                  initial={{ x: -32 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 4.4, duration: 0.2 }}
                  className=" bg-amber-100 w-full h-[4px]"
                ></motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
