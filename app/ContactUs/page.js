"use client";
import React, { useState, useEffect, useActionState } from "react";
import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiTwotoneHighlight,
  AiFillHome,
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
  AiFillGithub,
  AiFillLinkedin,
  AiFillWechat,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";

import { Formfield } from "../components";
import Image from "next/image";

import { images } from "../../public/constant";
import { icons } from "../../public/constant";
import { GDButton } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { RotatingWord } from "../components";
import { sendContactEmail } from "../actions/sendEmail";

// Optional: Show a toast or scroll to message after submission

const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

// 🔹 Item animation variants
const itemVariants = {
  closed: {
    opacity: 0,
    y: -10,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};
const ContactUs = () => {
  const stackArray = [
    { title: "Html", secondText: "", icon: icons.html },
    { title: "CSS", secondText: "", icon: icons.css },
    { title: "Tailwind", secondText: "", icon: icons.tailwind },
    { title: "React", secondText: "", icon: icons.react },
    { title: "Next.js", secondText: "", icon: icons.next },
    { title: "JavaScript", secondText: "", icon: icons.javaS },
    { title: "React", secondText: "Native", icon: icons.react },
    { title: "Expo CLI", secondText: "", icon: icons.expo },
    { title: "Github", secondText: "", icon: icons.github },
    { title: "Figma", secondText: "", icon: icons.figma },
    { title: "Framer", secondText: "", icon: icons.framer },
    { title: "Node.js", secondText: "", icon: icons.node },
    { title: "Appwrite", secondText: "", icon: icons.appwrite },
    { title: "Firebase", secondText: "", icon: icons.firebase },
    { title: "Sanity", secondText: "", icon: icons.sanity },
    { title: "Adobe", secondText: "illustrator", icon: icons.illustrator },
    { title: "Adobe", secondText: "InDesign", icon: icons.indesign },
    { title: "Adobe", secondText: "LiveCycle", icon: icons.livecycle },
    { title: "Adobe", secondText: "Photoshop", icon: icons.Photoshop },
    { title: "Canva", secondText: "", icon: icons.canva },
  ];
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const links = [
    { label: "About Me", href: "#about" },
    { label: "My Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Get In Touch", href: "#getintouch" },
  ];

  const WORDS = ["React apps", "Websites", "Framer websites", "Mobile apps"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      setPhase(1); // step 1
      await wait(800);
      setPhase(2); // step 2 + 3
      await wait(2000);
      setPhase(0); // reset
    };

    sequence();
    const loop = setInterval(sequence, 3200);
    return () => clearInterval(loop);
  }, []);

  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  const duration = 2.5;
  const [state, formAction, pending] = useActionState(sendContactEmail, null);
  useEffect(() => {
    if (state?.success) {
      // You could reset the form here if desired
      // document.querySelector('form')?.reset();
    }
  }, [state]);

  return (
    <div className="w-screen overflow-x-hidden pt-[50px] bg-LtBackground ">
      <div className=" w-full justify-items-center ">
        {/**Nav */}
        <div className="fixed z-50 w-full lg:max-w-[1500px] px-3 lg:px-[220px]">
          <div
            className="backdrop-blur-[50px] border border-gray-300 rounded-[20px]
                      px-6 py-3 flex flex-col lg:flex-row lg:items-center
                      justify-between"
          >
            <div className="flex w-full lg:w-auto justify-between">
              <a href="/" className="text-[20px] font-bricolage">
                We-Tech.design
              </a>

              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden"
              >
                {isOpen ? (
                  <AiOutlineMenuFold size={24} />
                ) : (
                  <AiOutlineMenuUnfold size={24} />
                )}
              </button>
            </div>

            {/* 🔹 Desktop Menu (STATIC) */}
            <div
              className="hidden lg:flex lg:w-[500px] lg:items-center lg:justify-between
                        font-interV text-[13px] text-gray-600 font-semibold"
            >
              {links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}

              <a
                href="https://calendar.app.google/ARzxk9SenHu5mAQA7"
                className="px-3 py-2 flex items-center gap-2
                       border border-gray-300 rounded-[10px]
                       font-bold bg-gray-100"
              >
                Book a call
                <Image
                  src={icons.googlemeet} // replace with your icon
                  alt="Google Meet"
                  width={24}
                  height={24}
                />
              </a>
            </div>

            {/* 🔹 Mobile Menu (ANIMATED) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="mobile-menu"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="lg:hidden overflow-hidden flex flex-col pt-5
                         font-interV text-[13px]
                         text-gray-600 font-semibold"
                >
                  <ul className="flex flex-col gap-4">
                    {links.map((item) => (
                      <motion.li key={item.label} variants={itemVariants}>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}

                    <motion.li variants={itemVariants} className="flex">
                      <a
                        href="https://calendar.app.google/ARzxk9SenHu5mAQA7"
                        onClick={() => setIsOpen(false)}
                        className="px-3 py-2 flex items-center gap-2
                               border border-gray-300 rounded-[10px]
                               font-bold bg-gray-100"
                      >
                        Book a call
                        <Image
                          src={icons.googlemeet}
                          alt="Google Meet"
                          width={24}
                          height={24}
                        />
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/**about me */}
        <div
          id="about"
          className="block lg:px-[150px] lg:max-w-[1500px] justify-items-center py-20"
        >
          <div>
            <Image
              className=" h-[8rem] w-[8rem] object-cover rounded-full bg-black border-8 border-white shadow-md shadow-purple-200 "
              src={images.bug}
            />

            <span className="flex gap-x-2 justify-center items-center">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
              <div className="font-interV py-3">Available Now</div>
            </span>
          </div>
          <div className=" justify-items-center ">
            <p className=" text-center font-bricolage lg:text-[4rem] text-[1.8rem] lg:leading-15 leading-8 lg:pb-5 pb-2 pt-3 font-black">
              Frontend Developer & <br></br>Graphic Designer
            </p>
            <div className="w-full">
              <span className="lg:text-[1.3rem] text-[11px] flex flex-col lg:flex-row items-center font-interV font-bold">
                8+ years in design, 1+ years building fast & beautiful
                <span className="w-auto h-auto bg-gray-200 px-2 py-1 ml-2 mt-3 rounded-md flex">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className=" font-black text-[1rem] whitespace-nowrap"
                    >
                      {WORDS[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </div>
            <p className=" pt-4  lg:text-[15px] text-[12px] text-center font-interV">
              One person who can design it, code it, and ship it.
            </p>
          </div>

          <div className="pt-5">
            <GDButton
              title={"Hire Him"}
              icon={<AiOutlineCheckCircle />}
              withicon={"true"}
              url={"mailto:wedesign4u11@gmail.com"}
            />
          </div>
        </div>
        {/**Achievement */}
        <div className="bg-[#f0f0f0] w-full  justify-items-center lg:px-[220px] py-20">
          <div className="w-full lg:max-w-[1100px]">
            <div className="text-center">
              <p className="font-bricolage pb-3 font-bold text-[1.8rem]">
                My Achievements
              </p>
              <p className="font-interV text-[17px]">
                Curious about what I've accomplihsed?
              </p>
              <p className="font-interV text-[17px]">
                Check my project page for details
              </p>
            </div>
            <div className=" w-full gap-y-6 justify-center items-center pt-12 flex flex-col lg:flex-row lg:justify-between">
              <div className="w-[330px] h-[383px] border-[1px] border-gray-300 bg-white rounded-[35px]">
                <div></div>

                <div className="w-full bg-gray-100 h-[280px] flex justify-center items-center   p-[6px] rounded-[36px]">
                  <div className=" w-full flex justify-center h-full">
                    <motion.svg
                      viewBox="0 0 83.78 55.68"
                      className="w-[200px] h-auto text-gray-700"
                      fill="#494949"
                    >
                      {/* LINE 1 */}
                      <motion.path
                        d={
                          phase === 2
                            ? "M18.59 30.57 L41.23 10.4"
                            : "M18.59 30.57 C18.65 30.09 18.73 29.62 18.81 29.15 A23.08 23.08 0 0 1 41.23 10.4"
                        }
                        fill="none"
                        stroke="#494949"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />

                      {/* LINE 2 */}
                      <motion.path
                        d={
                          phase === 2
                            ? "M41.48 10.4 L64.12 30.57"
                            : "M41.48 10.4 A23.08 23.08 0 0 1 64.12 30.57"
                        }
                        fill="none"
                        stroke="#494949"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                      <path
                        d="M64.29,38.33a4.41,4.41,0,1,1,4.41-4.41A4.42,4.42,0,0,1,64.29,38.33Zm0-5.82a1.41,1.41,0,1,0,1.41,1.41A1.41,1.41,0,0,0,64.29,32.51Z"
                        fill="#494949"
                      />
                      <path
                        d="M18.43,38.33a4.41,4.41,0,1,1,4.4-4.41A4.41,4.41,0,0,1,18.43,38.33Zm0-5.82a1.41,1.41,0,1,0,1.4,1.41A1.41,1.41,0,0,0,18.43,32.51Z"
                        fill="#494949"
                      />

                      {/* LEFT BAR */}
                      <motion.path
                        d="M60.58,8.9H24.2V5.45a1.5,1.5,0,1,0-3,0v9.16a1.5,1.5,0,1,0,3,0V11.9H60.58Z"
                        animate={{
                          x: phase >= 2 ? -6 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      {/* RIGHT BAR */}
                      <motion.path
                        d="M60.16,4a1.5,1.5,0,0,0-1.5,1.5V8.9H22.05v3H58.66v2.71a1.5,1.5,0,0,0,3,0V5.45A1.5,1.5,0,0,0,60.16,4Z"
                        animate={{
                          x: phase >= 2 ? 6 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      {/* POINT */}
                      <circle cx="41.44" cy="10.03" r="2.91" fill="#fff" />
                      <path
                        d="M41.44,14.44A4.41,4.41,0,1,1,45.85,10,4.42,4.42,0,0,1,41.44,14.44Zm0-5.82A1.41,1.41,0,1,0,42.85,10,1.42,1.42,0,0,0,41.44,8.62Z"
                        fill="#494949"
                      />

                      {/* PEN */}
                      <motion.g
                        animate={{
                          rotate: phase >= 1 ? -20 : 0,
                          x: phase >= 2 ? -18 : 0,
                          y: phase >= 1 ? -10 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ transformOrigin: "50% 50%" }}
                      >
                        <path
                          d="M54.58,37.79,46.22,19a1.49,1.49,0,0,0-1.37-.89H38a1.5,1.5,0,0,0-1.37.89L28.3,37.79a1.51,1.51,0,0,0,.15,1.48l5.89,8.26a1.48,1.48,0,0,0,1.22.63H47.33a1.49,1.49,0,0,0,1.22-.63l5.89-8.26A1.51,1.51,0,0,0,54.58,37.79Zm-8,7.37H36.33l-4.94-6.94L39,21.13h.93V31.84a3.35,3.35,0,1,0,4.86,3,3.33,3.33,0,0,0-1.86-3V21.13h.94L51.5,38.22ZM35.18,49.52H47.6v3H35.18Z"
                          fill="#494949"
                        />
                      </motion.g>
                    </motion.svg>
                  </div>
                </div>
                <div className=" px-5 py-4">
                  <p className="text-[17px] font-interV text-gray-700 font-bold">
                    8+ Years Graphic Designing
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Helped businesses across the world with my graphic designs
                    skills.
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[383px] border-[1px] border-gray-300 bg-white rounded-[35px]">
                <div className="w-full h-[280px] bg-gray-100 flex justify-center items-center   p-[6px] rounded-[36px]">
                  <div className=" w-full flex justify-center h-auto">
                    <motion.svg
                      viewBox="0 0 81.38 55.09"
                      className="w-[200px] h-auto text-gray-700"
                      fill="#494949"
                    >
                      {/* START ARROW (static) */}
                      <path d="M47.08,51.73a1.48,1.48,0,0,1-.8-.23l-7.6-4.76a1.5,1.5,0,0,1,0-2.54l7.49-4.69a1.5,1.5,0,0,1,1.6,2.54L42.3,45.47,47.88,49a1.5,1.5,0,0,1-.8,2.77Z" />

                      {/* END ARROW (static) */}
                      <path d="M71,51.73a1.5,1.5,0,0,1-.8-2.77l5.57-3.49-5.46-3.42a1.5,1.5,0,1,1,1.59-2.54l7.49,4.69a1.49,1.49,0,0,1,0,2.54l-7.6,4.76A1.42,1.42,0,0,1,71,51.73Z" />

                      {/* LINE (static) */}
                      <path d="M50.44,53.22l-.27,0A1.5,1.5,0,0,1,49,51.46L52,34.32a1.5,1.5,0,0,1,3,.53L51.91,52A1.5,1.5,0,0,1,50.44,53.22Z" />

                      {/* DOT 1 */}
                      <motion.circle
                        cx="56.24"
                        cy="48.65"
                        r="1.58"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
                        transition={{
                          duration: 2.4,
                          times: [0, 0.2, 0.6, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* DOT 2 */}
                      <motion.circle
                        cx="61.51"
                        cy="48.65"
                        r="1.58"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 0, 1, 1, 0],
                          scale: [0, 0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          times: [0, 0.2, 0.4, 0.6, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* DOT 3 */}
                      <motion.circle
                        cx="66.39"
                        cy="48.65"
                        r="1.58"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 0, 0, 1, 0],
                          scale: [0, 0, 0, 1, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          times: [0, 0.4, 0.6, 0.8, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* GEAR (infinite rotation) */}
                      <motion.path
                        d="M25.62,46.05H21.19a5.08,5.08,0,0,1-5-4,5.09,5.09,0,0,1-6.33-.68L6.79,38.25a5.06,5.06,0,0,1-.68-6.33,5.07,5.07,0,0,1-4-5V22.55a5.07,5.07,0,0,1,4-4.95,5.06,5.06,0,0,1,.68-6.33L9.92,8.14A5,5,0,0,1,13.5,6.66a5,5,0,0,1,2.74.8,5.08,5.08,0,0,1,5-4h4.43a5.06,5.06,0,0,1,4.95,4,5.08,5.08,0,0,1,2.75-.8A5,5,0,0,1,36.9,8.14L40,11.27a5,5,0,0,1,1.48,3.58,5.1,5.1,0,0,1-.8,2.75,5.06,5.06,0,0,1,4,4.95V27a5.06,5.06,0,0,1-4,5,5.1,5.1,0,0,1,.8,2.75A5,5,0,0,1,40,38.25L36.9,41.38a5,5,0,0,1-3.58,1.48,5.08,5.08,0,0,1-2.75-.8A5.06,5.06,0,0,1,25.62,46.05Zm-8-8.84a1.6,1.6,0,0,1,.57.11,1.51,1.51,0,0,1,.93,1.39V41a2.06,2.06,0,0,0,2.06,2.06h4.43A2.07,2.07,0,0,0,27.69,41V38.71a1.5,1.5,0,0,1,2.56-1.06l1.61,1.61a2.11,2.11,0,0,0,2.92,0l3.13-3.13a2.08,2.08,0,0,0,0-2.92L36.3,31.6A1.5,1.5,0,0,1,37.36,29h2.27A2.07,2.07,0,0,0,41.7,27V22.55a2.07,2.07,0,0,0-2.07-2.07H37.36A1.5,1.5,0,0,1,36,19.56a1.51,1.51,0,0,1,.33-1.64l1.61-1.61a2.08,2.08,0,0,0,0-2.92l-3.13-3.13a2.11,2.11,0,0,0-2.92,0l-1.61,1.61a1.5,1.5,0,0,1-2.56-1.06V8.53a2.07,2.07,0,0,0-2.07-2.06H21.19a2.06,2.06,0,0,0-2.06,2.06v2.28a1.51,1.51,0,0,1-.93,1.39,1.5,1.5,0,0,1-1.63-.33L15,10.26a2.11,2.11,0,0,0-2.92,0L8.91,13.39a2.05,2.05,0,0,0,0,2.92l1.61,1.61a1.5,1.5,0,0,1-1.06,2.56H7.18a2.07,2.07,0,0,0-2.07,2.07V27A2.07,2.07,0,0,0,7.18,29H9.46a1.5,1.5,0,0,1,1.06,2.56L8.91,33.21a2.05,2.05,0,0,0,0,2.92L12,39.26a2.11,2.11,0,0,0,2.92,0l1.61-1.61A1.47,1.47,0,0,1,17.63,37.21Zm5.78-2.86A9.59,9.59,0,1,1,33,24.76,9.6,9.6,0,0,1,23.41,34.35Zm0-16.18A6.59,6.59,0,1,0,30,24.76,6.6,6.6,0,0,0,23.41,18.17Z"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                        style={{ transformOrigin: "50% 50%" }}
                      />
                    </motion.svg>
                  </div>
                </div>
                <div className=" px-5 py-4">
                  <p className="text-[17px] font-interV text-gray-700 font-bold">
                    1+ Year Frontend Development
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Constantly exploring new technologies to stay at the
                    forefront of web development.
                  </p>
                </div>
              </div>
              <div className="w-[330px] h-[383px] border-[1px] border-gray-300 bg-white rounded-[35px]">
                <div className="w-full h-[280px] bg-gray-100 flex justify-center items-center   p-[6px] rounded-[36px]">
                  <div className=" w-full flex justify-center h-auto">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 70.91 60.44"
                      className="w-[180px] h-auto"
                      fill="none"
                    >
                      {/* DOCUMENT (STATIC) */}
                      <path
                        d="M52.85,1.18H19.15A7.79,7.79,0,0,0,11.37,9v.58h-4a1.5,1.5,0,0,0,0,3h4V18h-4a1.5,1.5,0,1,0,0,3h4v5.43h-4a1.5,1.5,0,1,0,0,3h4v5.44h-4a1.5,1.5,0,0,0,0,3h4v5.43h-4a1.5,1.5,0,0,0,0,3h4V49.9a7.79,7.79,0,0,0,7.78,7.78H37.42a1.5,1.5,0,0,0,0-3H27.17V4.18H52.85A4.79,4.79,0,0,1,57.63,9V34.32a1.5,1.5,0,0,0,3,0V9A7.79,7.79,0,0,0,52.85,1.18ZM24.17,54.68h-5a4.79,4.79,0,0,1-4.78-4.78V46.28h2.87a1.5,1.5,0,0,0,0-3H14.37V37.85h2.87a1.5,1.5,0,1,0,0-3H14.37V29.41h2.87a1.5,1.5,0,0,0,0-3H14.37V21h2.87a1.5,1.5,0,0,0,0-3H14.37V12.54h2.87a1.5,1.5,0,0,0,0-3H14.37V9a4.79,4.79,0,0,1,4.78-4.78h5Z"
                        fill="#494949"
                      />

                      {/* CIRCLE (STATIC) */}
                      <circle
                        cx="53.6"
                        cy="50"
                        r="8.5"
                        stroke="#494949"
                        strokeWidth="3"
                      />

                      {/* LINE 1 */}
                      <motion.line
                        x1="33.24"
                        y1="11.04"
                        x2="53.6"
                        y2="11.04"
                        stroke="#494949"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{
                          duration,
                          times: [0, 0.25, 0.7, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* LINE 2 */}
                      <motion.line
                        x1="33.24"
                        y1="17.74"
                        x2="44.67"
                        y2="17.74"
                        stroke="#494949"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{
                          duration,
                          times: [0, 0.35, 0.7, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* CHECK (AFTER BOTH LINES) */}
                      <motion.polyline
                        points="49.69 50.52 51.98 52.81 57.51 47.27"
                        stroke="#494949"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 0, 1, 0] }}
                        transition={{
                          duration,
                          times: [0, 0.6, 0.85, 1],
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                  </div>
                </div>
                <div className=" px-5 py-4">
                  <p className="text-[17px] font-interV text-gray-700 font-bold">
                    4+ years Designing Planners
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Help businesses create digital planners that are currently
                    listed on Etsy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**stack */}
        <div
          id="stack"
          className="bg-[LtBackground] w-full justify-items-center lg:px-[220px] py-20"
        >
          <div className="w-full lg:max-w-[1500px]">
            <div className="text-center">
              <p className="font-bricolage pb-3 font-bold text-[1.8rem]">
                My Stack ...
              </p>
              <p className="font-interV text-[17px]">
                My toolkit is centered on reliability and performance,
              </p>
              <p className="font-interV text-[17px]">
                ensuring high-quality delivery across all projects.
              </p>
            </div>
            <div className="pt-10 h-auto  justify-items-center w-full">
              <div className="grid lg:grid-cols-7 grid-cols-2 md:grid-cols-4  ">
                {stackArray.map((stack, i) => (
                  <span
                    key={i}
                    className="inline-flex w-[150px]  h-[100px] border-[1px] border-gray-100 justify-center items-center"
                  >
                    <Image
                      className=" grayscale-100 opacity-40 h-[2rem] w-auto mr-1"
                      src={stack.icon}
                    />
                    <p className="font-interV leading-[14px] text-[13px] text-gray-400 ">
                      {stack.title}
                      <br></br>
                      {stack.secondText}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/**projects */}
        <div
          id="projects"
          className="bg-[#f0f0f0] w-full justify-items-center px-5 lg:px-[160px] py-20"
        >
          <div className="w-full lg:max-w-[1300px] justify-items-center">
            <div className="text-center">
              <p className="font-bricolage pb-3 font-bold text-[1.8rem]">
                Featured Projects ...
              </p>
              <p className="font-interV text-[17px]">
                Crafted a modern, responsive user interface, prioritizing
              </p>
              <p className="font-interV text-[17px]">
                accessiblity and a flawless cross-browser experience.
              </p>
            </div>
            <div className=" w-full gap-y-6 justify-center items-center pt-22 flex flex-col lg:flex-row lg:justify-between">
              <div className="lg:w-[375px] w-full lg:-rotate-6 h-[443px] relative bg-white border-[1px] border-gray-300 rounded-[35px]">
                <div className="w-full bg-[url(/assets/images/cake.jpg)] bg-size-[100%_auto] bg-no-repeat border-[6px] border-white z-10 rounded-t-[36px] top-0 mask-b-from-60% mask-b-to-90 h-full"></div>

                <div className=" px-5 absolute bottom-0 z-10 py-4">
                  <p className="text-[17px] font-interV text-gray-400 font-bold">
                    01
                    <span className="pl-2 text-gray-700">
                      Ecoomerce Website
                    </span>
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Help business across USA with graphic designs and some more
                    text can be here
                  </p>
                </div>
              </div>
              <div className="lg:w-[375px] w-full lg:-mt-12 h-[443px] relative bg-white border-[1px] border-gray-300 rounded-[35px]">
                <div className="w-full bg-[url(/assets/images/realEstate.jpg)] bg-size-[100%_auto] bg-no-repeat border-[6px] border-white z-10 rounded-t-[36px] top-0 mask-b-from-60% mask-b-to-90 h-full"></div>

                <div className=" px-5 absolute bottom-0 z-10 py-4">
                  <p className="text-[17px] font-interV text-gray-400 font-bold">
                    02
                    <span className="pl-2 text-gray-700">RealEstate App</span>
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Help business across USA with graphic designs and some more
                    text can be here
                  </p>
                </div>
              </div>
              <div className="lg:w-[375px] w-full lg:rotate-6 h-[443px] relative bg-white border-[1px] border-gray-300 rounded-[35px]">
                <div className="w-full bg-[url(/assets/images/GetlinkedWeb.jpg)] bg-size-[100%_auto] bg-no-repeat border-[6px] border-white z-10 rounded-t-[36px] top-0 mask-b-from-60% mask-b-to-90 h-full"></div>

                <div className=" rounded-b-[35px]  px-5 absolute bottom-0 z-10 py-4">
                  <p className="text-[17px] font-interV text-gray-400 font-bold">
                    03
                    <span className="pl-2 text-gray-700">
                      Ecoomerce Website
                    </span>
                  </p>
                  <p className="text-[14px] font-interV text-gray-500">
                    Help business across USA with graphic designs and some more
                    text can be here
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-10 ">
              <GDButton
                title={"View All Projects"}
                withicon={"false"}
                url={"/Projects"}
              />
            </div>
          </div>
        </div>

        {/**Get intouch */}
        <div
          id="getintouch"
          className="bg-LtBackground w-full justify-items-center px-5 lg:px-[220px] pt-20 lg:py-20"
        >
          <div className="w-full lg:max-w-[1000px] justify-items-center">
            <div className="text-center">
              <p className="font-bricolage pb-3 font-bold text-[1.8rem]">
                Get In Touch ...
              </p>
              <p className="font-interV text-[17px]">
                Interested in discussing how my skills can contribute to your
                projects?
              </p>
              <p className="font-interV text-[17px]">
                Please feel free to reach out.
              </p>
            </div>
            <div className="w-full pt-10 lg:flex-row flex-col-reverse  flex">
              <div className="lg:w-[50%] w-full pt-20 flex items-center">
                <div className="">
                  <div className="flex items-center mb-[20px]">
                    <div className="text-gray-500 font-interV">
                      <p className=" text-[12px] font-bricolage ">Address:</p>
                      <p className="text-[20px] ">
                        Nigeria &#40;Available remotely&#41;
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center mb-[20px]">
                    <div className=" text-gray-500 ">
                      <p className="text-[12px] font-bricolage">Phone:</p>
                      <p className="text-[20px]">+234 70 669 52 339</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-[20px]">
                    <div className="text-gray-500 ">
                      <p className="text-[12px] font-bricolage">E-Mail:</p>
                      <p className="text-[20px]">WeDesign4u11@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <GDButton
                      title={"Live Chat"}
                      icon={<AiFillWechat />}
                      withicon={"true"}
                      url={"https://wa.me/07069952339"}
                    />
                  </div>
                </div>
                <div className=" mt-[30px] text-gray-600"></div>
              </div>
              {/**form */}
              <div className="lg:w-[50%] w-full">
                <div className=" w-full bg-gray-100 rounded-[35px]">
                  <form action={formAction} className="p-[20px]">
                    <div className="lg:flex ">
                      <div className="lg:w-[50%]">
                        <Formfield
                          id="firstName"
                          type="text"
                          placeholder="John"
                          title="First Name"
                          fieldtype="singleline"
                        />
                      </div>
                      <div className="lg:w-[50%]">
                        <Formfield
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          title="Last Name"
                          fieldtype="singleline"
                        />
                      </div>
                    </div>

                    <Formfield
                      type="text"
                      id="company"
                      placeholder="Acme Corp"
                      title="Company Name"
                      fieldtype="singleline"
                    />

                    <Formfield
                      id="email"
                      type="email"
                      placeholder="JohnDoe@email.com"
                      title="Email Address"
                      fieldtype="singleline"
                    />
                    <Formfield
                      id="message"
                      type="text"
                      placeholder="Write your message here"
                      title="Message"
                      multiple={true}
                      fieldtype="multiline"
                    />
                    <div className="px-5">
                      <p className="text-[14px] font-interV text-gray-600">
                        By clicking on submit, you aggree to send a message to
                        the owner of this website and will respond via your
                        email as listed above
                      </p>
                      <div className=" ">
                        <GDButton
                          type={"submit"}
                          disable={pending}
                          withicon={"true"}
                          // title={"Send Message"}
                          title={pending ? "Sending..." : "Send Message"}
                          // {!pending && <AiOutlineArrowRight className="ml-3 text-xl" />}
                          icon={<AiOutlineArrowRight />}
                        />
                      </div>
                    </div>
                    {state?.success && (
                      <p className="text-green-600 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    )}
                    {state?.error && (
                      <p className="text-red-600 font-medium">{state.error}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="py-10 "></div>
          </div>
        </div>

        {/**old */}
        <div className="w-screen lg:px-20 px-5 py-7 justify-items-center bg-[#ebebeb] ">
          <div className="w-full lg:max-w-[1500px] flex lg:flex-row flex-col items-center justify-between ">
            <p className="font-interV">
              © 2025 We-Tech.Design All rights reserved
            </p>
            <p className="font-bricolage py-7 lg:py-0 font-black text-[20px]">
              WE-Tech.Design
            </p>
            <div className="w-[100px] flex h-[30px] items-center justify-between">
              <a href="https://github.com/">
                <AiFillGithub size={"20px"} />
              </a>
              <a href="https://www.linkedin.com/" className="">
                <AiFillLinkedin size={"20px"} />
              </a>
              <a href="https://twitter.com/" className="font-bold">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: (i) => ({
    pathLength: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
  exit: (i) => ({
    pathLength: 0,
    transition: {
      duration: 0.4,
      delay: (3 - i) * 0.3,
      ease: "easeInOut",
    },
  }),
};

export function SequentialLines() {
  const [phase, setPhase] = useState("draw");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p === "draw" ? "erase" : "draw"));
    }, 4000); // total cycle time

    return () => clearInterval(interval);
  }, []);

  const lines = [45.15, 63.39, 81.62, 99.86];

  return (
    <motion.svg
      viewBox="0 0 156.65 130.04"
      className="w-40 h-auto text-gray-700"
    >
      {lines.map((y, i) => (
        <motion.line
          key={i}
          custom={i}
          x1="15.85"
          y1={y}
          x2={i === 3 ? 92.51 : 140.07}
          y2={y}
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          variants={lineVariants}
          initial="hidden"
          animate={phase === "draw" ? "visible" : "exit"}
        />
      ))}
    </motion.svg>
  );
}
